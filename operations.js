const addition = (arg1, arg2) => arg1 + arg2;

const subtraction = (minuend, subtrahend) => minuend - subtrahend;

const multiplication = (multiplicand, multiplier) => multiplicand * multiplier;

const division = (dividend, divider) => {
    if (divider !== 0) {
        return dividend / divider;
    } else {
        throw new Error('Divider can\'t be zero');
    }
};

const exponentiation = (basis, power) => Math.pow(basis, power);

const percent = (basis, percent) => {
    if (percent >= 0) {
        return basis * (percent / 100);
    } else {
        throw new Error('Percent can\'t be negative');
    }
};

const squareRoot = (arg) => {
    if (arg >= 0) {
        return Math.sqrt(arg);
    } else {
        throw new Error('Argument can\'t be negative');
    }
};

const sinus = (arg) => Math.sin(arg);

const cosinus = (arg) => Math.cos(arg);

const tangent = (arg) => {
    if (arg % Math.PI/2 !== 0){
        return Math.tan(arg);
    } else {
        throw new Error('Argument can\'t be PI/2+PI*k, k∈R');
    }
}; 

const cotangent = (arg) => {
    if (arg % Math.PI !== 0){
        return 1 / Math.tan(arg);
    } else {
        throw new Error('Argument can\'t be PI*k, k∈R');
    }
}; 

const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "**": exponentiation,
    "%": percent
}

const oneArgOperations = {
    "sqrt": squareRoot,
    "sin": sinus,
    "cos": cosinus,
    "tg": tangent,
    "ctg": cotangent
}

const getTwoArgsOperation = (selector) => {
    const operation = twoArgsOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

const getOneArgOperation = (selector) => {
    const operation = oneArgOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation, getOneArgOperation };