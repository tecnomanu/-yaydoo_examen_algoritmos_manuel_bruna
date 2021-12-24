import React from 'react'
import axios from 'axios';

export const UserModalDelete = ({ data, state}) => {
    const closeModal = () => {
        state({ user: null, show: false });
    }
    const handleDeleteUser = () => {
        if (data?.user?._id) {
            axios.delete(`http://localhost:3005/users/${data.user._id}`)
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
                            <h5 className="modal-title">Eliminar usuario</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Esta seguro que desea eliminar el usuario {data?.user?.name} ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleDeleteUser}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
