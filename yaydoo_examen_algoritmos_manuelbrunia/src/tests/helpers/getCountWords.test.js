
import '@testing-library/jest-dom';
import { getCountWords } from '../../helpers/getCountWord';

describe("Test on getCountWords helper", ()=>{
    test('Must return correct count words', ()=>{
        const string_test = "Hola hola mundo";
        const words = getCountWords(string_test);

        expect(words.hola).toEqual(2);
        expect(words.mundo).toEqual(1);
    })
})