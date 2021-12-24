import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserModalUpdate = ( {data, state} ) => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState;

    useEffect(() => {
        if(data?.user)
            setFormState({
                ...data.user
            });
    }, [data]);

    const closeModal = () => {
        state({ user: null, show: false });
    }

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name] : target.value,
        })
    }

    const handleUpdateUser = () => {
        if (data?.user?._id) {
            axios.put(`http://localhost:3005/users/${data.user._id}`, {...formState})
                .then(() => {
                    closeModal();
                })
        }
    };
    return (
        <>
            <div className={`modal-backdrop fade ${data?.show ? 'show' : ''}`}></div>
            <div className={`modal fade ${data?.show ? 'show' : ''}`} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar usuario {data?.user?.name}</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="string" 
                                            className="form-control" 
                                            name="name" 
                                            value={name}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                            placeholder="Nombre" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" 
                                            className="form-control" 
                                            name="email" 
                                            value={email}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                            placeholder="tu@email.com" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="email" 
                                            className="form-control" 
                                            name="email" 
                                            value={password}
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                            placeholder="tu@email.com" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                            <button type="button" className="btn btn-success" onClick={handleUpdateUser}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
