const Op = require("./op");
const Addition = require('./addition');
const Subtraction = require('./subtraction');
const Multiplication = require('./multiplication');
const Division = require('./division');

class Calc extends Op{
    constructor(str){
        super(str);
        this.num1Index;
        this.num2Index;
        this.num1;
        this.num2;
        this.result;
    }
    findNum1() {
        let strOp = new Op(this.str.substring(0, this.op));
        if (!Number(strOp.str.substring(0, strOp.op).trim()) && strOp.str.substring(0, strOp.op) !== '0' && strOp.str.substring(0, strOp.op) !== '') {
            strOp = new Calc(this.str.substring(strOp.op + 1, this.op));
            strOp.findNum1();
        }
        this.num1Index = strOp.op === -1 ? 0 : strOp.op + 1;
        this.num1 = Number(this.str.substring(this.num1Index, this.op).trim());
    }
    findNum2() {
        let strOp = new Op(this.str.substring(this.op + 1));
        if (!Number(strOp.str.substring(0, strOp.op).trim()) && strOp.str.substring(0, strOp.op).trim() !== '0' && strOp.str.substring(0, strOp.op) !== '') {
            strOp = new Calc(this.str.substring(this.op + 1, this.op + strOp.op));
            strOp.findNum2();
        }
        this.num2Index = strOp.op === -1 ? this.str.length : strOp.op + this.op + 1;
        this.num2 = Number(this.str.substring(this.op + 1, this.num2Index).trim());
    }
    complete() {
        if (!Number(this.num1) || !Number(this.num2))
            throw new Error('not valid');
        switch (this.operator) {
            case '+':
                let add = new Addition(this.num1, this.num2);
                this.result = Number(add.result());
                break;
            case '-':
                let sub = new Subtraction(this.num1, this.num2);
                this.result = Number(sub.result());
                break;
            case '*':
                let multi = new Multiplication(this.num1, this.num2);
                this.result = Number(multi.result());
                break;
            default:
                let div = new Division(this.num1, this.num2);
                this.result = Number(div.result());
                break;
        }
        this.str = this.str.substring(0, this.num1Index).concat(this.result.toString()).concat(this.str.substring(this.num2Index, this.str.length));
        this.opIndex();
    }
    calc() {
        if(Number(this.str)) this.result = Number(this.str); 
        while (!Number(this.str) && this.str !== '0') {
            this.findNum1();
            this.findNum2();
            this.complete();
        }
        return this.result;
    }
}

module.exports =  Calc ;