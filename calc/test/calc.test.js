const Calculator = require('./../src/calc');
const Operator = require('./../src/op');


describe('CALC', () => {
    it('should create numbers and operator in calc', () => {
        let calc = new Calculator('3+5');
        let result = calc.calc();
        expect(calc.num1).toEqual(3);
        expect(calc.num2).toEqual(5);
        expect(result).toBe(8);
    })
    it('should create num1 with the long exercise', () => {
        let calc = new Calculator('2+5*2');
        calc.findNum1;
        expect(calc.num1).toEqual(5);
    })
    it('should create num2 with the long exercise after', () => {
        let calc = new Calculator('3*5+8+6');
        calc.findNum2;
        expect(calc.num2).toEqual(5);
    })
    it('should return false when send operator before num1', () => {
        let calc = new Calculator('5+5*6')
        let op = new Operator(calc.str.substring(0, calc.op));
        expect(calc.num1IsNotANumber(op)).toBe(false);
    })
    it('should return there is operator before * operator', () => {
        let calc = new Calculator('5+6');
        let op = new Operator(calc.str.substring(0, calc.op));
        calc.num1SetIndex(op);
        expect(calc.num1BeginIndex).toBe(0);
        expect(calc.num1).toEqual(5)
    })
    it('should return 0 when there is not more than one operator before', () => {
        let calc = new Calculator('5+6');
        let op = new Operator(calc.str.substring(0, calc.op));
        let result = calc.num1IndexOp(op);
        expect(result).toEqual(0)
    })
    it('should return the index of operator when there is more than one operator before', () => {
        let calc = new Calculator('5+6*2');
        let op = new Operator(calc.str.substring(0, calc.op));
        let result = calc.num1IndexOp(op);
        expect(result).toEqual(2)
    })
    it('should return the number of num1 even if there is more than one operator', () => {
        let calc = new Calculator('5+6*2');
        let op = new Operator(calc.str.substring(0, calc.op));
        calc.num1SetIndex(op);
        let result = calc.num1ReturnNumber();
        expect(result).toEqual(6)
    })
})