function sum({ firstNumber, secondNumber }) {
    if (typeof firstNumber !== "number" && typeof secondNumber === 'number' && firstNumber !== null)
        throw new Error("firstNumber should be a Number type");

    if (typeof secondNumber !== "number" && typeof firstNumber === 'number' && secondNumber !== null)
        throw new Error("secondNumber should be a Number type");

    if (typeof firstNumber !== "number" && typeof secondNumber !== "number")
        throw new Error("firstNumber and secondNumber should be a Number type");

    if (isNaN(firstNumber) && !isNaN(secondNumber))
        throw new Error("firstNumber should be a Number type");

    if (isNaN(secondNumber) && !isNaN(firstNumber))
        throw new Error("secondNumber should be a Number type");

    if (isNaN(firstNumber) && isNaN(secondNumber))
        throw new Error("firstNumber and secondNumber should be a Number type");

    if (firstNumber === null)
        throw new Error("firstNumber could not be empty");

    if (secondNumber === null)
        throw new Error("secondNumber could not be empty");

    if (firstNumber === null && secondNumber === null)
        throw new Error("firstNumber and secondNumber could not be empty");

    return firstNumber + secondNumber;
}

module.exports = {
    sum
}