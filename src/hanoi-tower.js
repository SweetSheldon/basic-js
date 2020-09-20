const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 let turnNum = (2**disksNumber)-1;
 let secondsNum = Math.floor(turnNum/turnsSpeed*3600);
 let result={
   turns: turnNum,
   seconds: secondsNum
 };
 return result
};
