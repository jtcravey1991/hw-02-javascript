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

// function to take input for character criteria and set up the variable to select characters from
function criteriaFinder() {
  var includeLowerCase = confirm("Would you like your password to include lower case letters?");
  if (includeLowerCase === true) {
    workingChars += letters;
  }
  var includeUpperCase = confirm("Would you like your password to include capitol letters?");
  if (includeUpperCase === true) {
    workingChars += capitols;
  }
  var includeNumbers = confirm("Would you like your password to include numbers?");
  if (includeNumbers === true) {
    workingChars += numbers;
  }
  var includeSpecialChars = confirm("Would you like your password to include special characters? i.e.: !@#$%^&*()-=_+;':");
  if (includeSpecialChars === true) {
    workingChars += specialChars;
  }
}