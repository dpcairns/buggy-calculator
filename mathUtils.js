// function declaration
export function add(
    /* DEFINING or DECLARING arguments goes here: generic names for input */ 
    /* we dont care what the user calls them when they "pass them in" */
    firstNumber, secondNumber) {

    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return NaN;
    }
    
        // firstNumber only exists in the function
        // SCOPE
    return Number(firstNumber) + Number(secondNumber);
}

export function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
