const CustomError = require("../extensions/custom-error");




module.exports = class DepthCalculator {
  calculateDepth(array){
    var resultArr=[];
    var i;
    if(array.length!=0&&(array instanceof Array)){
      for(i=0;i<array.length;i++){
        if(array[i] instanceof Array){resultArr.push(myDeepth(array[i],2))}
        else if(i==(array.length-1)&&!(array[i] instanceof Array)){return 1}
      }
    }
    else{return 1}
    return getMaxOfArray(resultArr)
  }
};

function myDeepth(arr,n) {
  var n,i;
  !n?n=1:n 
  if(arr.length!=0&&(arr instanceof Array)){
  for(i=0;i<arr.length;i++){
    if(arr[i] instanceof Array){n++;return myDeepth(arr[i],n)}
    else if(i==(arr.length-1)&&!(arr[i] instanceof Array)){return n}
  }
}
else{return n}
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}























// module.exports = class DepthCalculator {
//   calculateDepth(array){
//     var resultArr=[];
//     var i;
//     if(array.length!=0&&(array instanceof Array)){
//       for(i=0;i<array.length;i++){
//         if(array[i] instanceof Array){resultArr.push(myDeepth(array[i],2))}
//         else if(i==(array.length-1)&&!(array[i] instanceof Array)){return 1}
//       }
//     }
//     else{return 1}
//     return getMaxOfArray(resultArr)
//   }
// };

// function myDeepth(arr,n) {
//   var n,i;
//   !n?n=1:n 
//   if(arr.length!=0&&(arr instanceof Array)){
//   for(i=0;i<arr.length;i++){
//     if(arr[i] instanceof Array){n++;return myDeepth(arr[i],n)}
//     else if(i==(arr.length-1)&&!(arr[i] instanceof Array)){return n}
//   }
// }
// else{return n}
// }

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }












// calculateDepth(arr,n) {
//   var n,i;
//   !n?n=1:n 
//   if(arr.length!=0&&(arr instanceof Array)){
//   for(i=0;i<arr.length;i++){
//     if(arr[i] instanceof Array){n++;return this.calculateDepth(arr[i],n)}
//     else if(i==(arr.length-1)&&!(arr[i] instanceof Array)){return n}
//   }
// }
// else{return n}