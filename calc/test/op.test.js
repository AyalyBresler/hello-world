const Operator = require('./../src/op');

describe('OPERATOR', () => {
    it('should update the index of op and operator', () => {
        let op = new Operator('5+6');
        expect(op.op).toBe(1);
        expect(op.operator).toBe('+');
    })
    it('should return true when send only operator', () => {
        let op = new Operator('5+6');
        expect(op.notCorrectNumber(1)).toBe(true)
    })
    it('should return false when there is number after minus', () => {
        let op = new Operator('5-6');
        expect(op.notNegativeNumber(1)).toBe(false);
    })
    it('should return false when not contains multiplication operator', () => {
        let op = new Operator('5*6');
        expect(op.containsMulti()).toBe(false);
    })
    it('should return true when not contains division operator', () => {
        let op = new Operator('5/6');
        expect(op.containsDivision()).toBe(true);
    })
    it('should return the index of addition operator', () => {
        let op = new Operator('5+6');
        expect(op.subOrAdd()).toBe(1);
    })
    it('should return true when not contains subtraction operator', () => {
        let op = new Operator('5-6');
        expect(op.containsSub()).toBe(true);
    })
    it('should return the index of division', () => {
        let op = new Operator('5+6/2');
        expect(op.divisionIndex()).toBe(3)
    })
    it('should return the index of sub operator when the sub it is more than add', () => {
        let op = new Operator('5-6+2');
        expect(op.notContainsMultiAndContainsSubOrAdd()).toBe(3)
    })
    it('should return true when + before -', () => {
        let op = new Operator('5+6-2');
        expect(op.indexSubAndAdd()).toBe(true)
    })
    it('should return true when - before +', () => {
        let op = new Operator('5-6+2');
        expect(op.indexSubAndAdd()).toBe(true)
    })
    it('should return true when - not found', () => {
        let op = new Operator('5+2');
        expect(op.indexSubAndAdd()).toBe(true);
    })
    it('should return -1 when operator not found', () => {
        let op = new Operator('-2');
        expect(op.subIndex()).toBe(-1);
    })
    describe('ERROR', () => {
        it('should throw error when send double operators the same', () => {
            expect(() => new Operator('5++6')).toThrow('Incorrect There is more than one operator');
            expect(() => new Operator('5//6')).toThrow('Incorrect There is more than one operator');
            expect(() => new Operator('5**6')).toThrow('Incorrect There is more than one operator');
        })
        it('should throw error when send double operators', () => {
            expect(() => new Operator('5+*6')).toThrow('Incorrect There is more than one operator');
            expect(() => new Operator('5*+6')).toThrow('Incorrect There is more than one operator');
            expect(() => new Operator('5-/6')).toThrow('Incorrect There is more than one operator');
            expect(() => new Operator('5+/6')).toThrow('Incorrect There is more than one operator');
        })
    })
})