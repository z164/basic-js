const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    depth = 1
    depthtmp = 1
    calculateDepth(arr) {
        if (arr.some((element) => Array.isArray(element))) {
            this.depth++
            arr = arr.flat()
            this.calculateDepth(arr)
        }
        else {
            this.depthtmp = this.depth;
            this.depth=1;
        }
        return this.depthtmp;
    }
};
const calc = new module.exports
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
