const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.get('/', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/registro', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login', (require, response) => {
    response.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.use(express.static('public'));






