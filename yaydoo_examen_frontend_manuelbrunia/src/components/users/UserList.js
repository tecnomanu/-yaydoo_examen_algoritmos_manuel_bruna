import React from 'react'
import Moment from 'react-moment';
import 'moment/locale/es';

export const UserList = ({ users, handleModalDeleteUser, handleModalUpdateUser }) => {
    const returnDate = (date)=>{
        return `${new Date(date).getUTCDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}`;
    }
    return (
        <>
            {
                (users.length < 0) 
                ? 'No se encontraron resultados' 
                : (
                    <div className="table-responsive">
                        <table className="table no-wrap user-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Nombre</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Dirección</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Contacto</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Nacimiento</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Edad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, key) => {
                                        return (
                                            <tr key={user._id}>
                                                <td className="pl-4">{key}</td>
                                                <td>
                                                    <h5 className="font-medium mb-0">{user.name}</h5>
                                                </td>
                                                <td>
                                                    <h5 className="font-medium mb-0">{user.personalInformation?.address || 'Sin dirección'}</h5>
                                                </td>
                                                <td>
                                                    <h5 className="font-medium mb-0">{user.personalInformation?.phone || 'Sin numero'}</h5>
                                                    <span className="text-muted">{user.email}r</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">
                                                        <Moment format="DD/MM/YY" date={user.personalInformation?.birthday} /></span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">
                                                    <Moment locale="es" fromNow ago date={user.personalInformation?.birthday} />
                                                    </span>
                                                </td>
                                                <td>
                                                    <button type="button" 
                                                            onClick={() => handleModalDeleteUser(user)}
                                                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                                    <button type="button" 
                                                            onClick={() => handleModalUpdateUser(user)}
                                                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </>

    )
}
