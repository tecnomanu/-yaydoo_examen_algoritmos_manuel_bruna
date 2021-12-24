import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { UserList } from './UserList';
import './UsersScreen.css';
import queryString from 'query-string';
import { Pagination } from '../ui/Pagination';
import { UserModalDelete } from './UserModalDelete';
import axios from 'axios';
import { UserModalUpdate } from './UserModalUpdate';

export const UsersScreen = () => {
    const location = useLocation();
    const { page = '1' } = queryString.parse(location.search);

    const [data, stateData] = useState( {loading: true, data: {} });
    
    const [dataModalDelete, stateDataModalDelete] = useState({user: null, show: false});
    const [dataModalUpdate, stateDataModalUpdate] = useState({user: null, show: false});

    const handleModalDeleteUser = (user)=>{
        stateDataModalDelete({user: user, show: true});
    }

    const handleModalUpdateUser = (user)=>{
        stateDataModalUpdate({user: user, show: true});
    }

    useEffect(()=>{
        if(dataModalUpdate.show || dataModalDelete.show) return;

        axios.get(`http://localhost:3005/users/?page=${page}`)
        .then((data) => { stateData({loading: false, data : data.data });});
    }, [page, dataModalUpdate, dataModalDelete]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-2 pb-2">
                    <h1 className="text-center">Listado de usuarios</h1>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
                            </div>
                            {
                                (data?.loading) 
                                ? "Cargando" 
                                : <UserList users={data?.data?.results} 
                                            handleModalUpdateUser={handleModalUpdateUser}
                                            handleModalDeleteUser={handleModalDeleteUser}></UserList>
                            }
                            <Pagination data={data?.data}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
            <UserModalUpdate data={dataModalUpdate} state={stateDataModalUpdate}></UserModalUpdate>
            <UserModalDelete data={dataModalDelete} state={stateDataModalDelete}></UserModalDelete>
        </div>
    )
}
