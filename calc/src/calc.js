const Op = require("./op");
const Exercise = require("./exercise");

class Calc extends Op {
    constructor(str) {
        super(str);
        this.num1Index;
        this.num2Index;
        this.num1;
        this.num2;
        this.result;
    }
    findNum1() {
        let strOp = new Op(this.str.substring(0, this.op));
        while (isNaN(Number(strOp.str.substring(strOp.op + 1).trim()))) {
            strOp = new Calc(this.str.substring(strOp.op + 1, this.op));
            strOp.findNum1();
        }
        this.num1Indexes(strOp);
    }
    num1Indexes(strOp) {
        this.num1Index = strOp.op === -1 ? 0 : strOp.op + 1;
        this.num1 = this.num1Index === this.op ? '' : Number(this.str.substring(this.num1Index, this.op).trim());
    }
    findNum2() {
        let strOp = new Op(this.str.substring(this.op + 1));
        while (isNaN(Number(strOp.str.substring(0, strOp.op).trim()))) {
            strOp = new Calc(this.str.substring(this.op + 1, this.op + strOp.op));
            strOp.findNum2();
        }
        this.num2Indexes(strOp);
    }
    num2Indexes(strOp) {
        this.num2Index = strOp.op === -1 ? this.str.length : strOp.op + this.op + 1;
        this.num2 = this.num2Index === this.op + 1 ? '' : Number(this.str.substring(this.op + 1, this.num2Index).trim());
    }
    complete() {
        if (this.correctNumber(this.num1) || this.correctNumber(this.num2)) {
            throw new Error('not valid');
        }
        let exercise = new Exercise(this.num1, this.operator, this.num2);
        this.result = exercise.result();
        this.str = this.str.substring(0, this.num1Index).concat(this.result.toString()).concat(this.str.substring(this.num2Index, this.str.length));
        this.opIndex();
    }
    correctNumber(num) {
        return isNaN(num) || num === '';
    }
    calc() {
        if (Number(this.str)) return Number(this.str);
        while (!Number(this.str) && this.str !== '0') {
            this.findNum1();
            this.findNum2();
            this.complete();
        }
        return this.result;
    }
}

module.exports = Calc;