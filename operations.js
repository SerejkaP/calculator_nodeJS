const checkArg = (arg) => {
    if ( Number.isNaN(Number(arg))) {
        throw new Error('There are not all numeric arguments here.');
    } else { 
        return true;
    }
};

const addition = (arg1, arg2) => {
    if (checkArg(arg1) && checkArg(arg2)) {
        return Number(arg1) + Number(arg2);
    }
};

const subtraction = (minuend, subtrahend) => {
    if (checkArg(minuend) && checkArg(subtrahend)) {
        return Number(minuend) - Number(subtrahend);
    }
};

const multiplication = (multiplicand, multiplier) => {
    if (checkArg(multiplicand) && checkArg(multiplier)) {
        return Number(multiplicand) * Number(multiplier);
    }
}

const division = (dividend, divider) => {
    if (checkArg(dividend) && checkArg(divider)) {
        if (Number(divider) !== 0) {
            return Number(dividend) / Number(divider);
        } else {
            throw new Error('Divider can not be zero');
        }
    }
};

const exponentiation = (basis, power) => {
    if (checkArg(basis) && checkArg(power)) {
        return Math.pow(Number(basis), Number(power));
    }
};

const percent = (basis, percent) => {
    if (checkArg(basis) && checkArg(percent)) {
        if (Number(percent) >= 0) {
            return Number(basis) * (Number(percent) / 100);
        } else {
            throw new Error('Percent can not be negative');
        }
    }
};

const squareRoot = (arg) => {
    if (checkArg(arg)) {
        if (Number(arg) >= 0) {
            return Math.sqrt(Number(arg));
        } else {
            throw new Error('Argument can not be negative');
        }
    }
};

const sinus = (arg) => {
    if (checkArg(arg)) {
        return Math.sin(Number(arg));
    }
};

const cosinus = (arg) => {
    if (checkArg(arg)) {
        return Math.cos(Number(arg));
    }
};

const tangent = (arg) => {
    if (checkArg(arg)) {
        if (((Number(arg) / 1.57 > 1.01)) || (Number(arg) / 4.71 > 1.01) || (Number(arg) ===0)){
            return Math.tan(Number(arg));
        } else {
            throw new Error('Argument can not be PI / 2 + PI * k, k∈R');
        }
    }
}; 

const cotangent = (arg) => {
    if (checkArg(arg)) {
        if (Number(arg) % Math.PI !== 0){
            return 1 / Math.tan(Number(arg));
        } else {
            throw new Error('Argument can not be PI * k, k∈R');
        }
    }
}; 

const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "^": exponentiation,
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