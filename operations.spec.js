const { getOneArgOperation, getTwoArgsOperation } = require("./operations");

describe("Operation getter", () => {
    it("should return addition function", () => {
        expect(getTwoArgsOperation("+").name).toBe("addition");
    });

    it("should return subtraction function", () => {
        expect(getTwoArgsOperation("-").name).toBe("subtraction");
    });

    it("should return multiplication function", () => {
        expect(getTwoArgsOperation("*").name).toBe("multiplication");
    });

    it("should return division function", () => {
        expect(getTwoArgsOperation("/").name).toBe("division");
    });

    it("should return exponentiation function", () => {
        expect(getTwoArgsOperation("^").name).toBe("exponentiation");
    });

    it("should return percent function", () => {
        expect(getTwoArgsOperation("%").name).toBe("percent");
    });

    it("should return square root function", () => {
        expect(getOneArgOperation("sqrt").name).toBe("squareRoot");
    });

    it("should return sinus function", () => {
        expect(getOneArgOperation("sin").name).toBe("sinus");
    });

    it("should return cosinus function", () => {
        expect(getOneArgOperation("cos").name).toBe("cosinus");
    });

    it("should return tangent function", () => {
        expect(getOneArgOperation("tg").name).toBe("tangent");
    });

    it("should return cotangent function", () => {
        expect(getOneArgOperation("ctg").name).toBe("cotangent");
    });
});

describe("Two arguments operation", () => {
    it("addition", () => {
        expect(getTwoArgsOperation("+")(1, 2)).toBe(3);
    });

    it("subtraction", () => {
        expect(getTwoArgsOperation("-")(1, 2)).toBe(-1);
    });

    it("multiplication", () => {
        expect(getTwoArgsOperation("*")(1, 2)).toBe(2);
    });

    it("division", () => {
        expect(getTwoArgsOperation("/")(1, 2)).toBe(0.5);
    });

    it("exponentiation", () => {
        expect(getTwoArgsOperation("^")(2, 3)).toBe(8);
    });

    it("percent", () => {
        expect(getTwoArgsOperation("%")(20, 5)).toBe(1);
    })
});

describe("One argument operation", () => {
    it("squareRoot", () => {
        expect(getOneArgOperation("sqrt")(4)).toBe(2);
    });

    it("sinus", () => {
        expect(getOneArgOperation("sin")(20)).toBe(0.9129452507276277);
    });

    it("cosinus", () => {
        expect(getOneArgOperation("cos")(20)).toBe(0.40808206181339196);
    });

    it("tangent", () => {
        expect(getOneArgOperation("tg")(20)).toBe(2.237160944224742);
    });

    it("tangent", () => {
        expect(getOneArgOperation("tg")(0)).toBe(0);
    });

    it("cotangent", () => {
        expect(getOneArgOperation("ctg")(20)).toBe(0.4469951089489167);
    })
});