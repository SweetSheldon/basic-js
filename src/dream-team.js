const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if ((typeof array)!='object'||array==null||(Array.isArray(array)==false)){return false}
  var result =[];
  array.map(function(name){
  if((typeof name)!='string'){}
  else{result.push(name.trim()[0].toUpperCase())}
  }
)
var sorted = result.sort();
return sorted.join('');
};
