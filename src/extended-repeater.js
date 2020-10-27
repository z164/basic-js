const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
}) {
    if (options.separator === undefined)
        options.separator = '+'
    if (options.addition === undefined)
        options.addition = ''
    if (options.additionSeparator === undefined)
        options.additionSeparator = '|'
    if (options.repeatTimes === undefined)
        options.repeatTimes = 1
    if (options.additionRepeatTimes === undefined)
        options.additionRepeatTimes = 1
    str = String(str);
    options.addition = String(options.addition)
    const strDefaultValue = str;
    for (let i = 0; i < options.repeatTimes; i++) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            str += options.addition;
            str += options.additionSeparator;
        }
        str = str.slice(0, -options.additionSeparator.length)
        str += options.separator;
        str += strDefaultValue
    }
    str = str.slice(0, -(options.separator.length + strDefaultValue.length))
    return str;
};