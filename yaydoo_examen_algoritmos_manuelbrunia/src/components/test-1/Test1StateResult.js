import React from 'react'

export const Test1StateResult = ( {resultAlice, resultBob} ) => {
    return (
        <div>
            <h1>{resultAlice} vs {resultBob}</h1>
            <h2>{
                (resultAlice === resultBob) 
                ? 'Hay empate'
                : (
                    (resultAlice > resultBob) 
                    ? 'Gana Alice'
                    : 'Gana Bob'
                )
                    
            }</h2>
        </div>
    )
}
