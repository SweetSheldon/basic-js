const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(year) {
if(Number(year)>15||Number(year)<=0||isNaN(parseFloat(year))){return false}
if((typeof Number(year))=='number'&&(typeof year)=='string'&&year!=''&&year!=[]){
    let k = 0.693/HALF_LIFE_PERIOD;
    let myYear = parseFloat(year);
    let result = Math.ceil(Math.abs(Math.log(myYear/MODERN_ACTIVITY)/k));
    return result;
    }
  else {return false;}
};
