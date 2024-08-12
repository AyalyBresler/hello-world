const Calc = require("../src/calc");

describe('SUBTRACTION', ()=>{
    it('should return a number to string of 2 numbers in the sub operator', () => {
        let calc = new Calc('5-3')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 numbers that one number is float in the sub operator', () => {
        let calc = new Calc('5-2.5')
        let result = calc.calc()
        expect(result).toBe(2.5)
    })
    it('should return a number negative to string of 2 numbers to first number is smaller than second number in the sub operator', () => {
        let calc = new Calc('5-9')
        let result = calc.calc()
        expect(result).toBe(-4)
    })
    it('should return a number to string of 2 number with whitespace in the sub operator', () => {
        let calc = new Calc('5 - 3')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 number in the sub operator twice', () => {
        let calc = new Calc('5--3')
        let result = calc.calc()
        expect(result).toBe(8)
    })
    it('should return a number to string of 2 numbers in the add operator after sub operator', () => {
        let calc = new Calc('2-+3')
        let result = calc.calc()
        expect(result).toBe(5)
    })
    it('should return a number to string of 2 numbers in the subtraction operator after the add operator', () => {
        let calc = new Calc('5+-3')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 numbers in the sub operator after the multiplication operator', () => {
        let calc = new Calc('5*-3')
        let result = calc.calc()
        expect(result).toBe(-15)
    })
    it('should return a number to string of 2 numbers in the sub operator after the division operator',()=>{
        let calc = new Calc('5/-2.5')
        let result = calc.calc()
        expect(result).toBe(-2)
    })
    it('should return a number that send when send only one number and operator',()=>{
        let calc = new Calc('-2');
        let result = calc.calc()
        expect(result).toBe(-2)
    })
    it('should return a number to string of three numbers in the sub operator',()=>{
        let calc = new Calc('10-3-5')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    describe('ERROR',()=>{
        it('should throw error when send only one number and operator', () => {
            let calc = new Calc('2-')
            expect(() => calc.calc()).toThrow('not valid')
        })
    })
})