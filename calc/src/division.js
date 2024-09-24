class Division {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    result() {
        if (this.num2 === 0)
            throw new Error('Can not divide by 0!');
        return this.num1 / this.num2;
    }
}

module.exports = Division;