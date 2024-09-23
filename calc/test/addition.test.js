const Calc = require("../src/calc");

describe('ADDITION', () => {
    it('should return a number to string of 2 numbers in the add operator', () => {
        let calc = new Calc('2+3')
        let result = calc.calc()
        expect(result).toBe(5)
    })
    it('should return a number to string of 2 numbers that one it is float in the add operator', () => {
        let calc = new Calc('3+2.5')
        let result = calc.calc()
        expect(result).toBe(5.5)
    })
    it('should return a number to string of 2 number with whitespace in the add operator', () => {
        let calc = new Calc('2 + 3')
        let result = calc.calc()
        expect(result).toBe(5)
    })
    it('should return a number to string of positive number and negative number in the add operator', () => {
        let calc = new Calc('2+-3')
        let result = calc.calc()
        expect(result).toBe(-1)
    })
    it('should return a number to string of three numbers in the add operator', () => {
        let calc = new Calc('2+113+5')
        let result = calc.calc()
        expect(result).toBe(120)
    })
    it('should return a number to string of number without an operator', () => {
        let calc = new Calc('25')
        let result = calc.calc()
        expect(result).toBe(25)
    })
    it('should return number when send only one number and operator', () => {
        let calc = new Calc('+2');
        let result = calc.calc()
        expect(result).toBe(2);
    })
    describe('ERROR', () => {
        it('should throw error when send only one number and operator', () => {
            let calc = new Calc('2+')
            expect(() => calc.calc()).toThrow('not valid')
        })
        it('should throw error when send the add operator twice', () => {
            let calc = new Calc('2++3');
            expect(() => calc.calc()).toThrow('Incorrect There is more than one operator');
        })
        it('should return a number to string of 2 numbers in the add operator after the subtraction operator', () => {
            let calc = new Calc('2-+3');
            expect(() => calc.calc()).toThrow('Incorrect There is more than one operator');
        })
        it('should throw error when send the add operator after the multiplication operator', () => {
            let calc = new Calc('2*+3');
            expect(() => calc.calc()).toThrow('Incorrect There is more than one operator');
        })
        it('should return a number to string of 2 numbers in the add operator after the division operator', () => {
            let calc = new Calc('2/+3');
            expect(() => calc.calc()).toThrow('Incorrect There is more than one operator');
        })
    })
})