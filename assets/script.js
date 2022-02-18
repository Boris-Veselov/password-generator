// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  

  // 1 prompt the user for password criteria
  // pass length 8 < 128
  // lowercase, uppercase, special characters
  var length = Number(prompt ("How long?"))
  console.log(length)
  
  var lowercase = confirm("Like lowercase?")
  console.log(lowercase)
  var uppercase = confirm("like uppercase?")
  console.log(uppercase)
  var numeric = confirm("Like numeric characters?")
  console.log(numeric)
  var specialCharacters = confirm("Like special characters")
  console.log(specialCharacters)

  // 2 validate the input

if (lowercase + uppercase + numeric + specialCharacters <= 0)
  return;

 
 
  // 3 generate password based on criteria

  document.getElementById("password").value = password;
      
   
  // 4 display password to the page
  return "";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
