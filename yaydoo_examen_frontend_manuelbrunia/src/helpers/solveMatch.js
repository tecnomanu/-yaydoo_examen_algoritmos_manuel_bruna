export const solveMatch = (a, b) => {
    if(a.length != b.length) return "error";

    let a_wins = 0;
    let b_wins = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i])
            a_wins++;
        else if(a[i] < b[i])
            b_wins++;
    }
    
    return [a_wins, b_wins];
}
