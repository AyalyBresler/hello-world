const Addition = require("./addition");
const Division = require("./division");
const Multiplication = require("./multiplication");
const Subtraction = require("./subtraction");

class Exercise {
    constructor(num1, op, num2) {
        this.num1 = num1
        this.op = op
        this.num2 = num2
    }

    operators = {
        '+': Addition,
        '-': Subtraction,
        '*': Multiplication,
        '/': Division
    }

    result() {
        let calc = new this.operators[this.op](this.num1, this.num2);
        return calc.result();
    }

}

module.exports = Exercise;