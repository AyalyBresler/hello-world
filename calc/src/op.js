class Op{
    constructor(str) {
        this.str = str;
        this.op;
        this.operator;
        this.doubleOp();
        this.opIndex();
    }
    opIndex() {
        this.op = this.str.indexOf('*') === -1 ? this.str.length : this.str.indexOf('*');
        this.op = this.str.indexOf('/') !== -1 &&  this.op > this.str.indexOf('/') ? this.str.indexOf('/') : this.op === this.str.length ? this.str.indexOf('+') : this.op;
        this.op = this.op === this.str.length || this.op === -1 && this.str.indexOf('-') !== 0 ? this.str.indexOf('-') : this.op;
        this.op = this.op === this.str.length ? -1 : this.op;
        this.operator = this.str.substring(this.op, this.op + 1);
    }
    doubleOp() {
        for (let i = 0; i < this.str.length; i++){
            if(!Number(this.str.charAt(i)) && !Number(this.str.charAt(i + 1)) && this.str.charAt(i) !== '0' && this.str.charAt(i + 1) !== '0' && this.str.charAt(i + 1).trim() !== '' && this.str.charAt(i).trim() !== '')
                if(!(this.str.charAt(i + 1) === '-' && Number(this.str.charAt(i + 2))))
                    this.str = this.str.substring(0, i).concat(this.str.substring(i + 1));
        }
    }
}

module.exports = Op;