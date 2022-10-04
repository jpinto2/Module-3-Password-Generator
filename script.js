// Assignment code here
function generatePassword() {

  // select is my array of strings holding all the character types to choose from. password is the random password sting generated. both are intialized to [] to make them empty arrays
  var select = [];
  var password = [];

  // i is my variable for for loops later
  var i;

  // the random i and random j needed for selecting the indexes of a random character
  // randI will decide type of criteria(type of charcter). randJ will decide which character in that criteria
  var randI;
  var randJ;
  
  // a do while loop to make sure user picks at least one criteria for password
  do {

    //asks the user for each criteria. if they answer yes, we add the characters in that criteria to the array
    var lower = window.prompt(" Do you want to include lowercase letters? If so, enter y");

    if (lower === "y") select.push("abcdefghijklmnopqrstuvwxyz");

    var upper = window.prompt("Do you want to include uppercase letters? If so, enter y");

    if (upper === "y") select.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    var numbers = window.prompt("Do you want to include numbers? If so, enter y");

      if (numbers === "y") select.push("1234567890");

    var special = window.prompt("Do you want to include special characters? If so, enter y");

    if (special === "y") select.push("`~!@#$%^&*()-_=+[{]}|;:',<.>/?");

  } while(select.length === 0);

  // do-while loop makes sure valid number is picked for size of random password
  do {

    var size = Number(window.prompt("Enter the size of your password. You may choose from 8 to 128"));

  } while(typeof size != "number" || size < 8 || size > 128);

  // each criteria must be used at least once so first for loop insures that by selecting one random character from each criteria
  for(i=0; i<select.length; i++) {
    randJ = Math.floor(Math.random() * select[i].length);
    // password is single string so we can just concatenate the new character to current password
    password += select[i][randJ];
  }

  // this for loop fills up the remaining space in password with random character from randomly chosen criteria
  for(i=select.length; i<size; i++) {
    randI = Math.floor(Math.random() * select.length);
    randJ = Math.floor(Math.random() * select[randI].length);
    password += select[randI][randJ];
  }

  // return password now that it's complete
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
