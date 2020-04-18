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
var passwordLength;

function criteriaFinder() {  // function to take input for character criteria and set up the variable to select characters from
  var workingChars;
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var capitols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890"
  var specialChars = "!@#$%^&*()-=_+;':";

  //prompts to determine criteria
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

  //determines if function completes or restarts due to lack of criteria
  if (workingChars) {
    console.log(workingChars);
    return workingChars;
  }
  else {
    alert("No criteria were chosen. Please try again");
    criteriaFinder();
  }
}

function passwordLengthFinder() {  //function to find and return the length of the generated password based on user input
  var tempLength = prompt("How many characters would you like to include in your password? (8-128)");
  tempLength = parseInt(tempLength);
  if (tempLength >= 8 && tempLength <= 128) {
    alert("You have chosen " + tempLength + " characters.");
    console.log(tempLength);
    return tempLength;
  }
  else {
    alert("Unrecognized or invalid input. Please try again.");
    passwordLengthFinder();
  }
}

criteriaFinder();
passwordLengthFinder();
