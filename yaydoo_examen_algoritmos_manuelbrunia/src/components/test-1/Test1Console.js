import React from 'react'

export const Test1Console = ({alice, bob, results}) => {
    return (
        <>
            <strong>Console:</strong><br/>
            <code>const a: [{alice.map((str,idx) => { return(`${str}${(idx < alice.length-1 ? ', ' : '')}` ) })}];</code><br/>
            <code>const b: [{bob.map((str,idx) => { return(`${str}${(idx < bob.length-1 ? ', ' : '')}` ) })}];</code><br/>
            <code>result: {results[0]}, {results[1]}</code>
        </>
    )
}
