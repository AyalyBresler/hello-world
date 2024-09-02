const express = require('express');
require('dotenv').config();
const Calc = require("./src/calc");

const app = express();
const { PORT, HOST } = process.env;

app.get('/', (req, res) =>{
    res.send('Welcome to my server!');
});

app.get("/calc", (req, res) => {
    console.log(req.params, req.body);
    const calc = new Calc();
    const result = calc.calc();
    res.send(result);
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}/`);
});
