import React from 'react'

export const Test2Console = ( {words, str} ) => {
    const keys = ["{", "}"]
    return (
        <>
            <strong>Console:</strong><br />
            <code>Input string: "{str}"</code><br /><br />
            <code>Output:  {keys[0]}
                {
                    Object.keys(words).map((key, index) => {
                        return (`"${key}" : ${words[key]}${(index < Object.keys(words).length - 1 ? ', ' : '')}`)
                    })
                }
                {keys[1]}
            </code>
        </>
    )
}
