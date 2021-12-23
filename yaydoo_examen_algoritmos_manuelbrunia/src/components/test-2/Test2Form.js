import React from 'react'
import { useForm } from '../../hooks/useForm/useForm';

export const Test2Form = ({defaultInput, setStringState}) => {
        
    const [values, handleInputChange] = useForm({
        stringInput: defaultInput
    });

    const {stringInput} = values;

    const handleSearch = (e)=>{
        e.preventDefault();
        setStringState(stringInput);
    };

    return (
        <form onSubmit={handleSearch}>
            <textarea className="form-control"
                name="stringInput"
                value={stringInput}
                onChange={handleInputChange}
                rows="10"
                placeholder="Pegue el texto aquí para contar sus palabras...">
            </textarea>
            <button type="submit"
                className="btn btn-primary mt-2">
                Contar Palabras
            </button>
        </form>
    )
}
