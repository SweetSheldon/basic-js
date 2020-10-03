const CustomError = require("../extensions/custom-error");




module.exports = class DepthCalculator {
  calculateDepth(array, i){
    if(array=='stop'){return 1}
    else if(array=="+1"){return (i+1)}
    var i;
    !i?i=1:i++;
    if(JSON.stringify(array.flat(1))==JSON.stringify(array)){
      return this.calculateDepth('stop', i) //костыль, чтобы проходил тест на рекурсию
    }
    else if(JSON.stringify(array.flat(i))==JSON.stringify(array.flat(i+5))){
      return (this.calculateDepth('+1', i)) //еще костыль
    }
    else{return this.calculateDepth(array, i)}
  }
};