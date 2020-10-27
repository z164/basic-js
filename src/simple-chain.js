const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if (arguments.length === 0)
            value = ''
        this.chain.push(value)
        return this
    },
    removeLink(position) {
        position--;
        if (position < 0 || position >= this.chain.length) {
            this.chain = []
            throw new Error('')
        }
        this.chain.splice(position, 1)
        return this
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let res = ''
        for (let i = 0; i < this.chain.length; i++) {
            res += `( ${this.chain[i]} )~~`
        }
        res = res.slice(0, -2);
        this.chain = []
        return res;
    }
};

module.exports = chainMaker;

