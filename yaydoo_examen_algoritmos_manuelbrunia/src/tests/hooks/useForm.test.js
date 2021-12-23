import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm/useForm.js';

describe('Test useForm hook', () => {
    const initialForm = {
        name: "Manuel",
        email: "manueldario.bruna@gmail.com"
    }

    test('Most retorn a default value', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('Most change only the value of input: Name', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;
        const nameToChange = 'Pedro';
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: nameToChange
                }
            });
        })

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( {...initialForm, name: nameToChange} );
    });

    test('Testing function reset, the form must return to initial values', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset] = result.current;
        const nameToChange = 'Pedro';
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: nameToChange
                }
            });
            reset();
        })

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( initialForm );
    });
})