const Operator = require("./op");
const Exercise = require("./exercise");

class Calculator extends Operator {
    constructor(str) {
        super(str);
        this.num1BeginIndex;
        this.num2EndIndex;
        this.num1;
        this.num2;
    }

    findNum1() {
        let numIncludesOp = new Operator(this.str.substring(0, this.op));
        if (this.num1IsNotANumber(numIncludesOp)) {
            numIncludesOp = new Calculator(this.str.substring(numIncludesOp.op + 1, this.op));
            numIncludesOp.findNum1();
        }
        this.num1SetIndex(numIncludesOp);
    }

    findNum2() {
        let numIncludesOp = new Operator(this.str.substring(this.op + 1));
        if (this.num2IsNotANumber(numIncludesOp)) {
            numIncludesOp = new Calculator(this.str.substring(this.op + 1, this.op + numIncludesOp.op));
            numIncludesOp.findNum2();
        }
        this.num2SetIndex(numIncludesOp);
    }

    num1IsNotANumber(numIncludesOp) {
        return isNaN(Number(numIncludesOp.str.substring(numIncludesOp.op + 1).trim()));
    }

    num2IsNotANumber(numIncludesOp) {
        return isNaN(Number(numIncludesOp.str.substring(0, numIncludesOp.op).trim()));
    }

    num1SetIndex(numIncludesOp) {
        this.num1BeginIndex = this.num1IndexOp(numIncludesOp);
        this.num1 = this.num1ReturnNumber();
    }

    num1IndexOp(numIncludesOp) {
        return numIncludesOp.op === -1 ? 0 : numIncludesOp.op + 1;
    }

    num1ReturnNumber() {
        return this.num1BeginIndex === this.op ? '' : Number(this.str.substring(this.num1BeginIndex, this.op).trim());
    }

    num2SetIndex(numIncludesOp) {
        this.num2EndIndex = this.num2IndexOp(numIncludesOp);
        this.num2 = this.num2ReturnNumber()
    }

    num2IndexOp(numIncludesOp) {
        return numIncludesOp.op === -1 ? this.str.length : numIncludesOp.op + this.op + 1;
    }

    num2ReturnNumber() {
        return this.num2EndIndex === this.op + 1 ? '' : Number(this.str.substring(this.op + 1, this.num2EndIndex).trim());
    }

    complete() {
        if (this.notCorrectNumber(this.num1) || this.notCorrectNumber(this.num2)) {
            throw new Error('not valid');
        }
        this.updateStr();
        this.opIndex();
    }

    updateStr() {
        let exercise = new Exercise(this.num1, this.operator, this.num2);
        let result = exercise.result();
        this.str = this.str.substring(0, this.num1BeginIndex)
            .concat(result.toString())
            .concat(this.str.substring(this.num2EndIndex, this.str.length));
    }

    subStr(index1, index2) {
        return this.str.substring(index1, index2);
    }

    notCorrectNumber(num) {
        return isNaN(num) || num === '';
    }

    calc() {
        while (isNaN(Number(this.str))) {
            this.findNum1();
            this.findNum2();
            this.complete();
        }
        return Number(this.str);
    }
}

module.exports = Calculator;