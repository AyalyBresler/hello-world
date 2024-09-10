class Op {
    constructor(str) {
        this.str = str;
        this.op;
        this.operator;
        this.doubleOp();
        this.opIndex();
    }
    opIndex() {
        this.op = this.findIndexOp();
        this.operatorStr();
    }
    operatorStr() {
        this.operator = this.str.substring(this.op, this.op + 1);
    }
    doubleOp() {
        for (let i = 0; i < this.str.length; i++)
            if (isNaN(Number(this.str.charAt(i))) && isNaN(Number(this.str.charAt(i + 1))))
                this.str = this.str.substring(0, i).concat(this.str.substring(i + 1));
    }
    findIndexOp() {
        return this.containsMulti() ? this.divisionIndex() : this.index('*');
    }
    containsMulti() {
        return this.index('*') === -1;
    }
    divisionIndex() {
        return this.containsDivision() ? this.index('/') : this.containsMultiAndDivision();
    }
    containsDivision() {
        return this.index('/') !== -1 && (this.index('*') > this.index('/') || this.index('*') === -1);
    }
    containsMultiAndDivision() {
        return this.index('*') === -1 ? this.subOrAdd() : this.subIndex();
    }
    subOrAdd() {
        return this.indexSubAndAdd() && this.index('+') !== -1 ? this.index('+') : this.subIndex();
    }
    indexSubAndAdd() {
        return this.index('+') > this.index('-');
    }
    subIndex() {
        return this.containsSub() ? this.index('-') : -1;
    }
    containsSub() {
        return this.index('-') !== 0;
    }
    index(char) {
        return this.str.indexOf(char);
    }
}

module.exports = Op;