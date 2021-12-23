import React, { useMemo, useState, useEffect } from 'react'
import { Test2Console } from './Test2Console';
import { Test2Form } from './Test2Form';
import { getCountWords } from '../../helpers/getCountWord';

export const Test2Screen = React.memo(() => {
    
    const string_default = localStorage.getItem('string_count') || `Érase una vez una niñita que lucía una hermosa capa
    de color rojo. Como la niña la usaba muy a menudo, todos la
    llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la
    llamó y le dijo: —Abuelita no se siente muy bien, he horneado
    unas galletitas y quiero que tú se las lleves. —Claro que sí
    —respondió Caperucita Roja, poniéndose su capa y llenando su
    canasta de galletas recién horneadas. Antes de salir, su mamá
    le dijo: — Escúchame muy bien, quédate en el camino y nunca
    hables con extraños. —Yo sé mamá —respondió Caperucita Roja y
    salió inmediatamente hacia la casa de la abuelita.`;
    
    const [string, setStringState] = useState(string_default);
    const [words, setWordsState] = useState(string);

    useEffect(() => {
        localStorage.setItem('string_count', string);
        setWordsState(getCountWords(string));
    }, [string])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12  pt-2">
                    <h1 className="text-center">Prueba 2 - Cuentapalabras</h1>
                    <p>Este cuenta palabras tiene la posibilidad de cambiar el texto actual por el que nosotros querramos, para poder contar las palabras de forma dinamica.</p>
                    <Test2Form 
                        defaultInput={string_default}
                        setStringState={setStringState} />
                    <strong>Si usamos el inspector, en la consola se imprime el objecto con el contador.</strong>
                </div>
                <div className="col-md-12 background-code mt-2 pt-4 pb-4">
                    <Test2Console words={words} str={string} />
                </div>
            </div>
        </div>
    )
})