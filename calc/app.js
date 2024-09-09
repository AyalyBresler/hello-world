const express = require('express');
require('dotenv').config();
const cors = require('cors');
const Calc = require("./src/calc");

const app = express();
const { PORT, HOST } = process.env;

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.post("/calc/", (req, res) => {
    const exercise = req.body.params;
    const calc = new Calc(exercise);
    let result = calc.calc();
    result = { result: result };
    res.send(result);
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}/`);
});
