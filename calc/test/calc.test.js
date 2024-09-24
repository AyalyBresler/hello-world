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
        calc.findNum1();
        expect(calc.num1).toEqual(5);
    })
    it('should create num2 with the long exercise after', () => {
        let calc = new Calculator('3*5+8+6');
        calc.findNum2();
        expect(calc.num2).toEqual(5);
    })
    it('should return false when send operator before num1', () => {
        let calc = new Calculator('5+5*6')
        let op = new Operator(calc.str.substring(0, calc.op));
        expect(calc.num1IsNotANumber(op)).toBe(false);
    })
    it('should return false when send operator after num2', () => {
        let calc = new Calculator('5*5+6')
        let op = new Operator(calc.str.substring(calc.op + 1));
        expect(calc.num2IsNotANumber(op)).toBe(false);
    })
    it('should return there is operator before * operator', () => {
        let calc = new Calculator('5*6');
        let op = new Operator(calc.str.substring(0, calc.op));
        calc.num1SetIndex(op);
        expect(calc.num1BeginIndex).toBe(0);
        expect(calc.num1).toEqual(5)
    })
    it('should return there is operator after * operator', () => {
        let calc = new Calculator('5*6');
        let op = new Operator(calc.str.substring(calc.op + 1));
        calc.num2SetIndex(op);
        expect(calc.num2EndIndex).toBe(calc.str.length);
        expect(calc.num2).toEqual(6)
    })
    it('should return 0 when there is not more than one operator before num1', () => {
        let calc = new Calculator('5+6');
        let op = new Operator(calc.str.substring(0, calc.op));
        let result = calc.num1IndexOp(op);
        expect(result).toEqual(0)
    })
    it('should return 0 when there is not more than one operator after num2', () => {
        let calc = new Calculator('5+6');
        let op = new Operator(calc.str.substring(calc.op + 1));
        expect(calc.num2IndexOp(op)).toEqual(calc.str.length);
    })
    it('should return the index of operator when there is more than one operator before', () => {
        let calc = new Calculator('5+6*2');
        let op = new Operator(calc.str.substring(0, calc.op));
        let result = calc.num1IndexOp(op);
        expect(result).toEqual(2)
    })
    it('should return the index of operator when there is more than one operator after', () => {
        let calc = new Calculator('5*6+2');
        let op = new Operator(calc.str.substring(calc.op + 1));
        let result = calc.num2IndexOp(op);
        expect(result).toEqual(3)
    })
    it('should return the number of num1 even if there is more than one operator', () => {
        let calc = new Calculator('5+6*2');
        let op = new Operator(calc.str.substring(0, calc.op));
        calc.num1SetIndex(op);
        let result = calc.num1ReturnNumber();
        expect(result).toEqual(6)
    })
    it('should return the number of num2 even if there is more than one operator', () => {
        let calc = new Calculator('5*6+2');
        let op = new Operator(calc.str.substring(calc.op + 1));
        calc.num2SetIndex(op);
        let result = calc.num2ReturnNumber();
        expect(result).toEqual(6)
    })
    it('should update the str of calculator and search new operator', () => {
        let calc = new Calculator('5*6+2');
        calc.findNum1();
        calc.findNum2();
        calc.complete();
        expect(calc.str).toEqual('30+2');
        expect(calc.operator).toEqual('+');
    })
    it('should update the str of calculator', () => {
        let calc = new Calculator('5*6+2');
        calc.findNum1();
        calc.findNum2();
        calc.updateStr();
        expect(calc.str).toEqual('30+2');
    })
    it('should return sub str when send 2 indexes', () => {
        let calc = new Calculator('5*6+2');
        let result = calc.subStr(1, 4);
        expect(result).toEqual('*6+');
    })
    it('should return false when send not correct number', () => {
        let calc = new Calculator('5*6+2');
        let result = calc.notCorrectNumber(calc.str);
        expect(result).toEqual(false);
    })
    describe('ERROR', () => {
        it('should throw error when send un correct numbers', () => {
            let calc = new Calculator('5+66*');
            calc.findNum1();
            calc.findNum2();
            expect(() => calc.complete()).toThrow('not valid');
        })
    })
})