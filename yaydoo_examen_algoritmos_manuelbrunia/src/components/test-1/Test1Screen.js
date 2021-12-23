import React, { useState } from 'react'
import { randomTreeFloorNumber } from '../../helpers/randomTreeFloorNumber';
import { solveMatch } from '../../helpers/solveMatch';
import { Test1BoxCard } from './Test1BoxCard';
import { Test1Console } from './Test1Console';
import './Test1Screen.css';
import { Test1StateResult } from './Test1StateResult';

export const Test1Screen = () => {
    const min = 1;
    const max = 100;
    const [alice_state, setAliceState] = useState([17,28,30]);
    const [bob_state, setBobState] = useState([99,16,8]);

    const [result_state, setResultState] = useState(solveMatch(alice_state, bob_state));

    const handleNumbersChange = () => {
        setAliceState(a => randomTreeFloorNumber(min, max))
        setBobState(b => randomTreeFloorNumber(min, max))
        setResultState(r => solveMatch(alice_state, bob_state));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 pt-2 pb-2">
                    <h1 className="text-center">Prueba 1 - Alice vs Bob</h1>
                    <h5 className="text-center">Alice y Bob se arman en contienda para ver quien gana segun sus aptitudes.</h5>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Test1BoxCard state={alice_state} name={'Alice'}></Test1BoxCard>
                        </div>
                        <div className="col-md-6">
                            <Test1BoxCard state={bob_state} name={'Bob'}></Test1BoxCard>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4 text-center">
                            <Test1StateResult resultAlice={result_state[0]} resultBob={result_state[1]}></Test1StateResult>
                            <button type="button" className="btn btn-success" onClick={handleNumbersChange}>Probar otro numero</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 background-code pt-4 pb-4">
                    <Test1Console alice={alice_state} bob={bob_state} results={result_state}></Test1Console>
                </div>
            </div>
        </div>
    )
}
