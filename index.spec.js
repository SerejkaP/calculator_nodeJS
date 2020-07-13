const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('API', () => {
    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: "1",
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: "abc",
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("There are not all numeric arguments here.");
            });
    });

    it('Sub request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    });

    it('Multiplication request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2);
            });
    });

    it('Division request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.5);
            });
    });

    it('Division request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 0,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Divider can not be zero");
            });
    });

    it('Exponentiation request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 2,
                    secondArg: 3,
                    operation: "^"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(8);
            });
    });

    it('Percent request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 20,
                    secondArg: 5,
                    operation: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
            });
    });

    it('Percent request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 20,
                    secondArg: -5,
                    operation: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Percent can not be negative");
            });
    });

    it('SquareRoot request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 4,
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2);
            });
    });

    it('SquareRoot request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: -9,
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Argument can not be negative");
            });
    });

    it('Sinus request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 20,
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.9129452507276277);
            });
    });

    it('Cosinus request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 20,
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.40808206181339196);
            });
    });

    it('Tangent request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 20,
                    operation: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2.237160944224742);
            });
    });

    it('Tangent request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 0,
                    operation: "tg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
            });
    });

    it('Cotangent request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 20,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0.4469951089489167);
            });
    });

    it('Cotangent request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    oneArg: 0,
                    operation: "ctg"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Argument can not be PI*k, k∈R");
            });
    })
});