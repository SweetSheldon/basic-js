const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if((typeof date)=="undefined"){return 'Unable to determine the time of year!';}
 else if((typeof date)!="object"){return 'Fail'}
 let month = date.getUTCMonth();
 if(month==11||month==0||month==1){
   return 'winter';
 }
 else if(month>1&&month<5){
   return 'spring'
 }
 else if(month>4&&month<8){
   return 'summer'
 }
 else if(month>7&&month<11){
  return 'fall'
}
else{return false;}
};
