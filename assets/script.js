// 1 prompt the user for password criteria
  //  - pass length 8 < 128
  // l - owercase, uppercase, special characters
// 2 validate the input
// 3 generate password based on criteria
// 4 display password to the page


var choiceArr = [];
var characterLength;

//Arrays
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];
var lowerCassArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericArr = ['1','2','3','4','5','6','7','8','9','0',];
console.log(lowerCassArr);

// main code, display password on screen
var generateBtn = document.querySelector("#generate");

// generate password
function generatePassword() {
  console.log("inside generate password function");
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomcharacter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomcharacter];
    console.log(password);
  }
  return password;
}

// variables
function getPrompts(){
  characterLength = parseInt(prompt("How many characters for your password?"));

  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter a number, between 8 and 128. Try again!");
    writePassword();
  }
  if (confirm("Do you like lowercase for you code?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Do you like uppercase for you code?")) {
    choiceArr = choiceArr.concat(upperCassArr);
  }
  if (confirm("Do you like numerics for you code?")) {
    choiceArr = choiceArr.concat(numericArr);
  }
  if (confirm("Do you like special characters for you code?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var password = generatePassword();
    
    passwordText.value = password;
  }
}

// generate button
generateBtn.addEventListener('click', writePassword);