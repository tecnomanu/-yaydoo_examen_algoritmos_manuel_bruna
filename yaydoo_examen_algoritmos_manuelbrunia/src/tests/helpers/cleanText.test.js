import '@testing-library/jest-dom';
import { cleanText } from '../../helpers/cleanText';

describe("Test on cleanText helper", ()=>{
    test('Must clean dots, dashs and special characters', ()=>{
        const string_test = "hola . - _ , mundo";
        const clean = cleanText(string_test);

        expect(clean).toEqual(expect.not.stringContaining("."));
        expect(clean).toEqual(expect.not.stringContaining("-"));
        expect(clean).toEqual(expect.not.stringContaining(","));
        expect(clean).toEqual(expect.not.stringContaining("_"));
    })
})