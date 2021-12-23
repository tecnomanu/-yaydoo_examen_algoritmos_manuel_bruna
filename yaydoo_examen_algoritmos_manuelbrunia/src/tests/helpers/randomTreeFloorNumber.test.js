import '@testing-library/jest-dom';
import { randomTreeFloorNumber } from '../../helpers/randomTreeFloorNumber';

describe("Test on randomTreeFloorNumber helper", ()=>{
    const min = 1;
    const max = 100;
    test('Must return array length == 3', ()=>{
        const random_number = randomTreeFloorNumber(min, max);
        expect(random_number.length).toBe(3);
    })
    test('The number can`t be less 1 and more than 100', ()=>{
        const random_number = randomTreeFloorNumber(min, max);

        for(let i in random_number){
            expect(random_number[i]).toBeGreaterThan(min);
            expect(random_number[i]).toBeLessThan(max);
        }
    })
})