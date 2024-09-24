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
        expect(op.notNegativeNumber(1)).toBe(true);
    })
    it('should return false when not contains multiplication operator',()=>{
        let op = new Operator('5*6');
        expect(op.containsMulti()).toBe(false);
    })
    it('should return false when not contains division operator',()=>{
        let op = new Operator('5/6');
        expect(op.containsDivision()).toBe(false);
    })
    it('should return false when not contains addition operator',()=>{
        let op = new Operator('5+6');
        expect(op.subOrAdd()).toBe(false);
    })
    it('should return false when not contains subtraction operator',()=>{
        let op = new Operator('5-6');
        expect(op.containsSub()).toBe(false);
    })
})