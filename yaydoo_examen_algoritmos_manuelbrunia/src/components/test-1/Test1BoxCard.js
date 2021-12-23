import React from 'react'

export const Test1BoxCard = ({ name, state }) => {
    return (
        <div className="card">
            <div className="card-header">
                {name}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Claridad del problema: {state[0]}</li>
                <li className="list-group-item">Originalidad: {state[1]}</li>
                <li className="list-group-item">Dificultad: {state[2]}</li>
            </ul>
        </div>
    )
}
