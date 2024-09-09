const Calc = require("../src/calc");

describe('MULTIPLICATION', ()=>{
    it('should return a number to string of 2 numbers in the multi operator', () => {
        let calc = new Calc('2*3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of 2 numbers that one number is float  in the multi operator', () => {
        let calc = new Calc('2*2.5')
        let result = calc.calc()
        expect(result).toBe(5)
    })
    it('should return a number to string of 2 numbers that one it is 1 and the result is the second number in the multi operator',()=>{
        let calc = new Calc('1*3')
        let result = calc.calc()
        expect(result).toBe(3)
    })
    it('should return a number to string of 2 number with whitespace in the multi operator', () => {
        let calc = new Calc('2 *  3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of 2 number in the multi operator twice', () => {
        let calc = new Calc('2**3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of 2 numbers in the sub operator after multi operator', () => {
        let calc = new Calc('2-*3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of 2 numbers in the multi operator after the add operator', () => {
        let calc = new Calc('2+*3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of 2 numbers in the sub operator after the multi operator', () => {
        let calc = new Calc('2*-3')
        let result = calc.calc()
        expect(result).toBe(-1)
    })
    it('should return a number to string of 2 numbers in the multi operator after the division operator', () => {
        let calc = new Calc('2/*3')
        let result = calc.calc()
        expect(result).toBe(6)
    })
    it('should return a number to string of a lot of numbers in the multi operator',()=>{
        let calc = new Calc('4*  6-24/12-5')
        let result = calc.calc()
        expect(result).toBe(17)
    })
    describe('ERROR', () => {
        it('should throw error when send only one number and operator', () => {
            let calc = new Calc('*2')
            expect(() => calc.calc()).toThrow('not valid')
        })
        it('should throw error when send only one number and operator',()=>{
            let calc = new Calc('2*')
            expect(() => calc.calc()).toThrow('not valid')
        })
    })
})