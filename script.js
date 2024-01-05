// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordOptions() {
    //length = prompt("Enter the length of the password (between 8 and 128)")
    //types = prompt("Select character types: (L)lowercase, (U)Uppercase, (N)Numeric, (S)Special.)

    //# Validate user input
    //     if isValidLength(length) and isValidTypes(types):
    //         return { length, types }
    //     else:
    //         alert("Invalid input. Please try again.")
    //         return getPasswordOptions()

    // # Function to validate password length
    // function isValidLength(length):
    //     return length >= 8 and length <= 128

    // # Function to validate selected character types
    // function isValidTypes(types):
    //     validTypes = ["L", "U", "N", "S"]
    //     return all(type in validTypes for type in types)
}

// Function for getting a random element from an array
function getRandom(arr) {
    //     index = Math.floor(Math.random() * arr.length)
    //     return arr[index]
}

// Function to generate password with user input
function generatePassword() {
    //options = getPasswordOptions() --> length and types
    //characters = list of all chosen characters (types)
    //password = string (length according to getPasswordOptions.length)
    //  function createCharactersSet()
    //    if (options include character types add this array to characters array and merge with other character types which were chosen.)
    //check options.length and loop through characters. Collect random elements from that list, join them together into string and add this string to password.
}

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

