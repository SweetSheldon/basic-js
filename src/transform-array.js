const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let result =[];
  var i=0;
  let j=0;
  for(i=0;i<array.length;i++){
    if(array[i]=='--discard-prev'&&i!=0){
      if(array[i-2]!='--discard-next'){
      result[j-1]=array[i+1];i++;}
      else{continue}}
    else if(array[i]=='--double-prev'&&i!=0){
      if(array[i-2]!='--discard-next'){
      result[j]=array[i-1];
      j++;}
      else{continue}}
    else if(array[i]=='--double-next'&&i!=(array.length-1)){
      result[j]=array[i+1];
      j++;}
    else if(array[i]=='--discard-next'&&i!=(array.length-1)){
      i++;}
    else if(array[i]=='--discard-prev'&&i==0){continue}
    else if(array[i]=='--double-prev'&&i==0){continue}
    else if(array[i]=='--double-next'&&i>=array.length-1){break}
    else if(array[i]=='--discard-next'&&i>=array.length-1){break}
    // else if(array[i+1]='undefined'&&i>=array.length-1){break}
    else{result[j]=array[i];j++;}
  }
  let resultArr =[];i=0;
  for(j=0;j<result.length;j++){
    if(result[j]!='--discard-prev'&&result[j]!="--double-prev"&&result[j]!='--double-next'&&result[j]!='--discard-next'&&(typeof result[j])!="undefined"){
      resultArr[i]=result[j];i++;
    }
  }
  
  return resultArr;
};
