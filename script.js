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
/*
generatePassword: creates random passwords using createPasswordAttempt, checks them with acceptablePassword, then returns an acceptable password attempt
No Parameters
*/
function generatePassword() {
  var workingChars = criteriaFinder();
  var passwordLength = passwordLengthFinder();

  var tempPassword = createPasswordAttempt(workingChars, passwordLength);
  var passwordAccepted = false;
  while (passwordAccepted === false) {
    passwordAccepted = acceptablePassword(workingChars, tempPassword);
    if (passwordAccepted === false) {
      tempPassword = createPasswordAttempt(workingChars, passwordLength);
    }
  }
  return tempPassword;
}

/*
createPasswordAttempt: uses user inputs for character types and password length to create a password attempt
Parameters:
pChars: a string containing a list of all possible characters for the password attempt
pLength: an integer determining the length, in characters, of the password attempt
*/
function createPasswordAttempt(pChars, pLength) {
  var tempPassword = "";
  for (var i = 0; i < pLength; i++) {
    tempPassword += randomCharGenerator(pChars);
  }
  return tempPassword;
}

/*
criteriaFinder: creates string of possible characters from user confirms for character types
No Parameters
*/
function criteriaFinder() {
  var workingChars = "";
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
    return workingChars;
  }
  else {
    alert("No criteria were chosen. Please try again");
    criteriaFinder();
  }
}


/*
passwordLengthFinder: accepts and varifies user input to determine password length
No Parameters
*/
function passwordLengthFinder() {
  var tempLength = prompt("How many characters would you like to include in your password? (8-128)");
  tempLength = parseInt(tempLength);
  if (tempLength >= 8 && tempLength <= 128) {
    alert("You have chosen " + tempLength + " characters.");
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

/*
acceptablePassword: tests attempted password against character criteria to determine if it used at least one of each type
Parameters
pCharacters: the variable containing all possible characters for password creation
pAttempt: the current password attempt being checked
*/
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

  //parses through possible characters to check for each type of character
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
  //parses password attempt to check for each type of character
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

  // compares the possible character results to the password attempt results to determine if password is acceptable
  if (charHasLetters === attemptHasLetters && charHasCapitols === attemptHasCapitols && charHasNumbers === attemptHasNumbers && charHasSpecial === attemptHasSpecial) {
    acceptablePassword = true;
  }
  else {
    acceptablePassword = false;
  }
  return acceptablePassword;
}