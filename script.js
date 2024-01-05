// Array of special characters to be included in the password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in the password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in the password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt the user for password options
function getPasswordOptions() {
    var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128)")); //Parse the user input for password length as an integer.
    var characterTypes = prompt("Select character types: (L) lowercase, (U) Uppercase, (N) Numeric, (S) Special. You can select more than one by combining the characters, e.g (SUN)");
    // Convert the input types to uppercase
    characterTypes = characterTypes.toUpperCase();

    // Function to validate user input
    function inputValidate() {
        // Check if the length and types are valid
        if (isValidLength(passwordLength) && isValidTypes(characterTypes)) {
            // Merge selected character types
            var characterTypesMerge = mergeAllCharacters(characterTypes);
            // Return an object containing password options
            return { passwordLength, characterTypesMerge }; //{} used to return multiple values from this function.
        } else {
          // If input is invalid, show an alert and prompt again
            alert("Invalid input. Please make sure to select at least one character type and try again.");
            return getPasswordOptions();
        }
    }

    // Function to validate password length
    function isValidLength(length) {
        return length >= 8 && length <= 128; // returns true, if the provided length parameter is greater than or equal to 8 and less than or equal to 128. Otherwise, it returns false
    }

    // Function to validate selected character types
    function isValidTypes(userInput) {
        //array of valid character types
        var validTypes = ["L", "U", "N", "S"];
        // Split the input into an array of characters
        var typesArray = userInput.split('');
        // Check if at least one valid character type is selected
        var hasValidType = typesArray.every(function(userInput) {
            // Check if the current type is included in the valid types array
            return validTypes.includes(userInput);
        });
        // Return true if the length is greater than 0  and at least one valid type is selected
        // and all characters are valid types
        return typesArray.length > 0 && hasValidType;
    }
    // Return the result of input validation
    return inputValidate();
}

// Function to merge selected character types
function mergeAllCharacters(characterTypes) {
     // Initialize an empty array to store the merged characters
    var charMerge = [];
    // Check if "S" (Special) is included in the selected character types
    if (characterTypes.includes("S")) {
      // Concatenate the special characters array to the merged characters array
        charMerge = charMerge.concat(specialCharacters);
    }
    if (characterTypes.includes("N")) {
        charMerge = charMerge.concat(numericCharacters);
    }
    if (characterTypes.includes("L")) {
        charMerge = charMerge.concat(lowerCasedCharacters);
    }
    if (characterTypes.includes("U")) {
        charMerge = charMerge.concat(upperCasedCharacters);
    }
    // Return the merged character types
    return charMerge;
}

// Function for getting a random element from an array
function getRandom(arr) {
    // Calculate a random index within the range of the array length
    var index = Math.floor(Math.random() * arr.length);
    // Return the element at the randomly generated index
    return arr[index];
}

// Function to generate a password with user input
function generatePassword() {
    // Retrieve password options (length and character types) from user input
    var options = getPasswordOptions();
    // Extract password length and merged character types from options
    var passwordLen = options.passwordLength;
    var passwordChar = options.characterTypesMerge;
    // Initialize an empty string to store the generated password
    var password = "";
    // Generate the password by randomly selecting characters from the merged set
    for (var i = 0; i < passwordLen; i++) {
        // Append a randomly selected character to the password string
        password += getRandom(passwordChar);
    }
    // Return the generated password
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add an event listener to the generate button
generateBtn.addEventListener('click', writePassword);
