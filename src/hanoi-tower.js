const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let movesAmount = Math.pow(2, disksNumber) - 1
  let secondsForMove = turnsSpeed / 3600
  return {
    turns: movesAmount,
    seconds: Math.floor(movesAmount/secondsForMove)
  }
};