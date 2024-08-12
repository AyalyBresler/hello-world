const Op = require("./op");
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
                this.result = Number(this.num1) + Number(this.num2);
                break;
            case '-':
                this.result = Number(this.num1) - Number(this.num2);
                break;
            case '*':
                this.result = Number(this.num1) * Number(this.num2);
                break;
            default:
                this.result = Number(this.num1) / Number(this.num2);
                break;
        }
        // if(!Number(this.result) && this.result != 0) throw new Error('not valid')
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