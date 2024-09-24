const Operator = require('./../src/op');

describe('OPERATOR', () => {
    it('should update the index of op and operator',()=>{
        let op = new Operator('5+6');
        expect(op.op).toBe(1);
        expect(op.operator).toBe('+');
    })
})