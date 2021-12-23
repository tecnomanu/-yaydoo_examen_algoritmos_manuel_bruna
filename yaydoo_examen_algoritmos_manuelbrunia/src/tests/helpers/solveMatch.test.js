import '@testing-library/jest-dom';
import { solveMatch } from '../../helpers/solveMatch';

describe("Test on solveMatch helper", ()=>{
    test('Test to win Alice', ()=>{
        const result = solveMatch([1,1,1],[2,2,2]);
        expect(result).toEqual(expect.arrayContaining([3,0]));
    })
    test('Test to win Bob', ()=>{
        const result = solveMatch([1,1,1],[2,2,2]);
        expect(result).toEqual(expect.arrayContaining([0,3]));
    })
    test('Test to draw', ()=>{
        const result = solveMatch([1,1,1],[1,1,1]);
        expect(result).toEqual(expect.arrayContaining([0,0]));
    })
})