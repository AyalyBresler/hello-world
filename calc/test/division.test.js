const Calculator = require("../src/calc");

describe('DIVISION', () => {
    it('should return a number to string of 2 numbers in the division operator', () => {
        let calc = new Calculator('6/3')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 numbers that one number is float  in the division operator', () => {
        let calc = new Calculator('5/2.5')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 numbers that one it is 1 and the result is the second number in the division operator', () => {
        let calc = new Calculator('10-3/1')
        let result = calc.calc()
        expect(result).toBe(7)
    })
    it('should return a number to string of 2 number with whitespace in the division operator', () => {
        let calc = new Calculator('6 / 3')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    it('should return a number to string of 2 numbers in the sub operator after the division operator', () => {
        let calc = new Calculator('6/-3')
        let result = calc.calc()
        expect(result).toBe(-2)
    })
    it('should return a number to string of three numbers in the multi operator', () => {
        let calc = new Calculator('12/3/2')
        let result = calc.calc()
        expect(result).toBe(2)
    })
    describe('ERROR', () => {
        it('should throw error when send only one number and operator', () => {
            let calc = new Calculator('2/')
            expect(() => calc.calc()).toThrow('not valid')
        })
        it('should throw error when send only one number and operator', () => {
            let calc = new Calculator('/2')
            expect(() => calc.calc()).toThrow('not valid')
        })
        it('should throw error when send number is 0 before the operator division', () => {
            let calc = new Calculator('8/0')
            expect(() => calc.calc()).toThrow('Can not divide by 0!')
        })
        it('should throw error when send the sub operator after division operator', () => {
            expect(() => new Calculator('6-/3')).toThrow('Incorrect There is more than one operator');
        })
        it('should throw error when send the division operator twice', () => {
            expect(() => new Calculator('6//3')).toThrow('Incorrect There is more than one operator')
        })
        it('should throw error when send the division operator after the add operator', () => {
            expect(() => new Calculator('6+/3')).toThrow('Incorrect There is more than one operator');
        })
        it('should throw error when send the division operator after the multi operator', () => {
            expect(() => new Calculator('6*/3')).toThrow('Incorrect There is more than one operator')
        })
    })
})