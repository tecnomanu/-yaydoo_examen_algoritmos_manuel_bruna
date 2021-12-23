import { cleanText } from "./cleanText";

export const getCountWords = (string = '') => {

    const clean_text = cleanText(string);
    const str_split = clean_text.split(" ");
    const words = [];
    
    for(let i of str_split){
        words[i] = words[i] !== undefined ? words[i]+1 : 1;
    }

    //Print on screen for help user to read.
    console.log("Output:", words);
    
    return words;
}
