const addition = (arg1, arg2) => {
    var firArg = Number(arg1);
    var secArg = Number(arg2);
    if ( Number.isNaN(firArg) || Number.isNaN(secArg)) {
        throw new Error('There are not all numeric arguments here.');
    } else { 
        return firArg + secArg;
    }
};

const subtraction = (minuend, subtrahend) => minuend - subtrahend;

const multiplication = (multiplicand, multiplier) => multiplicand * multiplier;

const division = (dividend, divider) => {
    var firArg = Number(dividend);
    var secArg = Number(divider);
    if ( Number.isNaN(firArg) || Number.isNaN(secArg)) {
        throw new Error('There are not all numeric arguments here.');
    } else { 
        if (secArg !== 0) {
            return firArg / secArg;
        } else {
            throw new Error('Divider can not be zero');
        }
    }
};

const exponentiation = (basis, power) => {
    var firArg = Number(basis);
    var secArg = Number(power);
    if ( Number.isNaN(firArg) || Number.isNaN(secArg)) {
        throw new Error('There are not all numeric arguments here.');
    } else { 
        return Math.pow(firArg, secArg);
    }
};

const percent = (basis, percent) => {
    var firArg = Number(basis);
    var secArg = Number(percent);
    if ( Number.isNaN(firArg) || Number.isNaN(secArg)) {
        throw new Error('There are not all numeric arguments here.');
    } else { 
        if (secArg >= 0) {
            return firArg * (secArg / 100);
        } else {
            throw new Error('Percent can not be negative');
        }
    }
};

const squareRoot = (argument) => {
    var arg = Number(argument);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        if (arg >= 0) {
            return Math.sqrt(arg);
        } else {
            throw new Error('Argument can not be negative');
        }
    }
};

const sinus = (argument) => {
    var arg = Number(argument);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        return Math.sin(arg);
    }
};

const cosinus = (argument) => {
    var arg = Number(argument);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        return Math.cos(arg);
    }
};

const tangent = (argument) => {
    var arg = Number(argument);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        if ((arg % Math.PI/2 !== 0) && (arg % Math.PI/2 + Math.PI !==0) || (arg % Math.PI === 0)){
            return Math.tan(arg);
        } else {
            throw new Error('Argument can not be PI/2+PI*k, k∈R');
        }
    }
}; 

const cotangent = (argument) => {
    var arg = Number(argument);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        if (arg % Math.PI !== 0){
            return 1 / Math.tan(arg);
        } else {
            throw new Error('Argument can not be PI*k, k∈R');
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