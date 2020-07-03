// подключение express
const express = require('express');
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Определяем обработчик корневого урла с методом POST
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
            response.status(200).json(Math.sqrt(firstArg, secondArg));
            break;
        case '%':
            response.status(200).json((firstArg / secondArg) * 100 + '%');
            break;
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);