const CustomError = require("../extensions/custom-error");

function getElement(array, index) {
    if (array[index] === '--discard-next') {
        array.splice(index, 1)
        if (typeof array[index] === 'number') {
            array[index] = ''
        }
    } else if (array[index] === '--discard-prev') {
        array.splice(index, 1)
        if (typeof array[index - 1] === 'number') {
            array[index-1] = ''
        }
    } else if (array[index] === '--double-next') {
        array.splice(index, 1)
        if (typeof array[index] === 'number') {
            array.splice(index, 0, array[index])
        }
    } else if (array[index] === '--double-prev') {
        array.splice(index, 1)
        if (typeof array[index - 1] === 'number') {
            array.splice(index - 1, 0, array[index - 1])
        }
    } else {
        return 0;
    }
    return 1;
}

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Not an array')
    }
    for (let i = 0; i < arr.length; i++) {
        i-=getElement(arr, i);
    }
    arr = arr.filter(element => element!=='')
    return arr
};
