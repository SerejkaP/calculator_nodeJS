const express = require("express");
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operations");
const { getOneArgOperation } = require("./operations");

const app = express();
app.use(bodyParser.json());

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    var firArg = Number(firstArg);
    var secArg = Number(secondArg);
    if ( Number.isNaN(firArg) || Number.isNaN(secArg)) {
        response.status(400).json('There are not all numeric arguments here.');
    } else {
        try {
            response
                .status(200)
                .json(getTwoArgsOperation(operation)(firstArg, secondArg));
        } catch (e) {
        response.status(400).json(e.message);
        }
    }
});

app.post("/one-arg", function(request, response) {
    const { oneArg, operation } = request.body;
    var arg = Number(oneArg);
    if (Number.isNaN(arg)) {
        response.status(400).json('It is not a numeric argument here.');
    } else {
        try {
            response
                .status(200)
                .json(getOneArgOperation(operation)(oneArg));
        } catch (e) {
            response.status(400).json(e.message);
        }
    }
});

module.exports = app;