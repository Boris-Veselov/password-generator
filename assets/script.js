var characterLength = 8;
var choiceArr = [];

//Arrays
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericArr = ['1','2','3','4','5','6','7','8','9','0',];

var generateBtn = document.querySelector("#generate");
  // 1 prompt the user for password criteria
  // pass length 8 < 128
  // lowercase, uppercase, special characters
  // 2 validate the input
  // 3 generate password based on criteria
  // 4 display password to the page
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var password = generatePassword();
    

    passwordText.value = password;
  } else {
    passwordText.value = "";
}
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomletter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomletter];
  }
  return password;
}


generateBtn.addEventListener('click', writePassword);