const express = require("express");
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operations");
const { getOneArgOperation } = require("./operations");

const app = express();
app.use(bodyParser.json());

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    firstArg = Number(firstArg);
    secondArg = Number(secondArg);
    if (Number.isNaN(firstArg) || Number.isNaN(secondArg)) {
        return { statusCode: 400, error: 'Not all arguments are numeric' }
    } else {
    try {
        response
            .status(200)
            .json(getTwoArgsOperation(operation)(firstArg, secondArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
}});

app.post("/one-arg", function(request, response) {
    const { oneArg, operation } = request.body;
    oneArg = Number(oneArg);
    if (Number.isNaN(oneArg)) {
        return { statusCode: 400, error: 'Argument are not numeric' }
    } else {
    try {
        response
            .status(200)
            .json(getOneArgOperation(operation)(oneArg));
    } catch (e) {
        response.status(400).json(e.message);
    }
}});

module.exports = app;
// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => {
    console.log('App started on https://localhost:3000');
});