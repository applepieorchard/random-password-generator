// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/',
  "'", '!', '#', '$', '^',
  '?', ':', ',', ')', '(', 
  '}', '{', ']', '[', '~', 
  '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var lengthPrompt = prompt("Enter your desired password length (Between 8 and 128)");
  var lengthAnswer = parseInt(lengthPrompt, 10);
  var question = "Should your generated password contain";
  function charConfirms() {
    var chars = [];
    var specialCharConfirm = confirm(`${question} special characters? (%@!)`);
    var numericCharConfirm = confirm(`${question} numbers? (123)`);
    var upperCharConfirm = confirm(`${question} uppercase characters? (ABC)`);
    var lowerCharConfirm = confirm(`${question} lowercase characters? (abc)`);
    if (!specialCharConfirm && !numericCharConfirm && !upperCharConfirm && !lowerCharConfirm) {
      var allFalse = confirm("You must select at least one character type. Try again?");
      if (allFalse) {
        charConfirms()
      }
    } else { 
      if (specialCharConfirm) {
        chars.push(specialCharacters)
      } if (numericCharConfirm) {
        chars.push(numericCharacters)
      } if (upperCharConfirm) {
        chars.push(upperCasedCharacters)
      } if (lowerCharConfirm) {
        chars.push(lowerCasedCharacters)
      }
    } return choices = chars
  };
  if (lengthAnswer >= 8 && lengthAnswer <= 128 ) {
    charConfirms()
    return passwordLength = lengthAnswer, chosenChars = choices
  } else {
    var tryAgain = confirm("You have not selected a valid number. Try again?");
    if (tryAgain) {
      getPasswordOptions()
    }
  }
};

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

// Function to generate password with user input
function generatePassword() {

};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);