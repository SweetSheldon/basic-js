const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.directMode = isDirect;
}
  encrypt(message, key) {
    if(((typeof message)!="string")||((typeof key)!="string")){throw Error}
    var msgNoSpaces = message.replace(/\s/g, '');
    // if(message.length<key.length){do{message+=message;}while(message.length<key.length);message = message.slice(0,key.length)}
    if(key.length<msgNoSpaces.length){do{key+=key;}while(key.length<msgNoSpaces.length);key = key.slice(0,msgNoSpaces.length)}
    var result =''
    var num;var j=0;
    for(i=0;i<message.length;i++){
    
      if(message.toUpperCase().charCodeAt(i)<65||message.toUpperCase().charCodeAt(i)>90){num =message[i]; result+=num;}
      else{
        num=message.toUpperCase().charCodeAt(i)+key.toUpperCase().charCodeAt(j)-130
        result+=String.fromCharCode(num%26+65);j++;
      }
    }
    return this.directMode? result : result.split('').reverse().join('')
  }    
  decrypt(message, key) {
    if(((typeof message)!="string")||((typeof key)!="string")){throw Error}
    var msgNoSpaces = message.replace(/\s/g, '');
    // if(message.length<key.length){do{message+=message;}while(message.length<key.length);message = message.slice(0,key.length)}
    if(key.length<msgNoSpaces.length){do{key+=key;}while(key.length<msgNoSpaces.length);key = key.slice(0,msgNoSpaces.length)}
    var result =''
    var num;var j=0;
    for(i=0;i<message.length;i++){
    
      if(message.toUpperCase().charCodeAt(i)<65||message.toUpperCase().charCodeAt(i)>90){num =message[i]; result+=num;}
      else{
        num=Math.abs(message.toUpperCase().charCodeAt(i)-key.toUpperCase().charCodeAt(j)+26)
        result+=String.fromCharCode(num%26+65);j++;
      }
    }
    return this.directMode? result : result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;