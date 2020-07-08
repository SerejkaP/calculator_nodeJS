// подключение express
const express = require('express');
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Операции с двумя аргументами
app.post("/", function(request, response) {
    const { firstArg, secondArg, operation } = request.body; // деструктуризация
    switch(operation){
        case '+':
            response.status(200).json(firstArg + secondArg);
            break;
        case '-':
            response.status(200).json(firstArg - secondArg);
            break;
        case '*':
            response.status(200).json(firstArg * secondArg);
            break;
        case '/':
            response.status(200).json(firstArg / secondArg);
            break;
        case '^':
            response.status(200).json(Math.pow(firstArg, secondArg));
            break;
        case 'sqrt':
            response.status(200).json(Math.pow(firstArg, 1/secondArg));
            break;
        case '%':
            response.status(200).json(firstArg * (secondArg / 100));
            break;
    }
});
// Операции с одним аргументом
app.post("/one-argument", function(request, response) {
    const { firstArg, operation } = request.body; // деструктуризация
    switch(operation){
        case 'sin':
            response.status(200).json(Math.sin(firstArg));
            break;
        case 'cos':
            response.status(200).json(Math.cos(firstArg));
            break;
        case 'tg':
            response.status(200).json(Math.tg(firstArg));
            break;
        case 'ctg':
            response.status(200).json(Math.ctg(firstArg));
            break;
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => {
    console.log('App started on https://localhost:3000');
});