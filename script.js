// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log(1);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My Code------------------------------------------------------|

//declared variables
var password;
var workingChars;
var letters = "abcdefghijklmnopqrstuvwxyz";
var capitols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890"
var specialChars = "!@#$%^&*()-=_+;':";