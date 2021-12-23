export const randomTreeFloorNumber = ( min, max) => {
    let numbers = [];
    for(let i = 0; i < 3; i++){
        numbers[i] = Math.floor(Math.random() * (max-min) + min);
    }
    return numbers;
}
