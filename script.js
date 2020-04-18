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
function generatePassword() {
  var workingChars = criteriaFinder();
  var passwordLength = passwordLengthFinder();
  var tempPassword = createPasswordAttempt();
  var passwordAccepted
}

function createPasswordAttempt(pChars, pLength) {  //creates a password attempt to be checked by acceptablePassword
  var tempPassword;
  for (var i = 0; i < pLength; i++) {
    tempPassword += randomCharGenerator(pChars);
  }
  return tempPassword;
}

function criteriaFinder() {  // function to take input for character criteria and set up the variable to select characters from
  var workingChars;
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var capitols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
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

function randomCharGenerator(pString) {  //returns a random character from input pString
  var tempChar = pString.charAt(Math.floor(Math.random() * pString.length));
  return tempChar;
}

function acceptablePassword(pCharacters, pAttempt) { //tests attempted password against character criteria to determine if it used at least one of each type
  var acceptablePassword;
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var capitols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*()-=_+;':";
  var charHasLetters = false;
  var charHasCapitols = false;
  var charHasNumbers = false;
  var charHasSpecial = false;
  var attemptHasLetters = false;
  var attemptHasCapitols = false;
  var attemptHasNumbers = false;
  var attemptHasSpecial = false;

  for (var i = 0; i < pCharacters.length; i++) {
    if (letters.includes(pCharacters.charAt(i))) {
      charHasLetters = true;
    }
    else if (capitols.includes(pCharacters.charAt(i))) {
      charHasCapitols = true;
    }
    else if (numbers.includes(pCharacters.charAt(i))) {
      charHasNumbers = true;
    }
    else if (specialChars.includes(pCharacters.charAt(i))) {
      charHasSpecial = true;
    }
  }

  for (var i = 0; i < pAttempt.length; i++) {
    if (letters.includes(pAttempt.charAt(i))) {
      attemptHasLetters = true;
    }
    else if (capitols.includes(pAttempt.charAt(i))) {
      attemptHasCapitols = true;
    }
    else if (numbers.includes(pAttempt.charAt(i))) {
      attemptHasNumbers = true;
    }
    else if (specialChars.includes(pAttempt.charAt(i))) {
      attemptHasSpecial = true;
    }
  }

  if (charHasLetters === attemptHasLetters && charHasCapitols === attemptHasCapitols && charHasNumbers === attemptHasNumbers && charHasSpecial === attemptHasSpecial) {
    acceptablePassword = true;
  }
  else {
    acceptablePassword = false;
  }
  
  return acceptablePassword;
}