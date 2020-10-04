const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var newAddition = separator(options);
  var result =[];
  if(options.repeatTimes==undefined){return str.toString()+'ADD!'}
  for(i=0;i<options.repeatTimes;i++){
    result.push(`${str}`);
    result.push(newAddition);
    if(options.separator!=undefined){result.push(options.separator);}
    else{result.push('+')}
  }
  result.pop()
  var x= result.join('')
  return x
};

function separator(options){
  var i;
  var myArr=[];
  for(i=0;i<options.additionRepeatTimes;i++){
    myArr.push(`${options.addition}`)
    if(options.additionSeparator!=undefined){myArr.push(`${options.additionSeparator}`)}
  }
  if(options.additionSeparator!=undefined){myArr.pop();}
  return myArr.join('')
}
  