// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  

  // 1 prompt the user for password criteria
  // pass length 8 < 128
  // lowercase, uppercase, special characters
 

  // 2 validate the input
  
 
  // 3 generate password based on criteria
  
      
   
  // 4 display password to the page
  
  return "Generated password goes here";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



