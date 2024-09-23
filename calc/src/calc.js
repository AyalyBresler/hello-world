const Operator = require("./op");
const Exercise = require("./exercise");

class Calc extends Operator {
    constructor(str) {
        super(str);
        this.num1Index;
        this.num2Index;
        this.num1;
        this.num2;
    }
    findNum1() {
        let strOp = new Operator(this.str.substring(0, this.op));
        if (isNaN(Number(strOp.str.substring(strOp.op + 1).trim()))) {
            strOp = new Calc(this.str.substring(strOp.op + 1, this.op));
            strOp.findNum1();
        }
        this.num1Indexes(strOp);
    }
    findNum2() {
        let strOp = new Operator(this.str.substring(this.op + 1));
        if (isNaN(Number(strOp.str.substring(0, strOp.op).trim()))) {
            strOp = new Calc(this.str.substring(this.op + 1, this.op + strOp.op));
            strOp.findNum2();
        }
        this.num2Indexes(strOp);
    }
    num1Indexes(strOp) {
        this.num1Index = strOp.op === -1 ? 0 : strOp.op + 1;
        this.num1 = this.num1Index === this.op ? '' : Number(this.str.substring(this.num1Index, this.op).trim());
    }
    num2Indexes(strOp) {
        this.num2Index = strOp.op === -1 ? this.str.length : strOp.op + this.op + 1;
        this.num2 = this.num2Index === this.op + 1 ? '' : Number(this.str.substring(this.op + 1, this.num2Index).trim());
    }
    complete() {
        if (this.correctNumber(this.num1) || this.correctNumber(this.num2)) {
            console.log(this.num1, this.num2, this.str);
            throw new Error('not valid');
        }
        this.updateStr();
        this.opIndex();
    }
    updateStr() {
        let exercise = new Exercise(this.num1, this.operator, this.num2);
        let result = exercise.result();
        this.str = this.str.substring(0, this.num1Index).concat(result.toString()).concat(this.str.substring(this.num2Index, this.str.length));
    }
    subStr(index1, index2) {
        return this.str.substring(index1, index2);
    }
    correctNumber(num) {
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

module.exports = Calc;