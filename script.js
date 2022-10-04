// Assignment code here
function generatePassword() {

  var select = [];
  var password = [];
  var i;
  var randI;
  var randJ;
  
  var lower = window.prompt(" Do you want to include lowercase letters? If so, enter y");

  if (lower === "y") select.push("abcdefghijklmnopqrstuvwxyz");

  var upper = window.prompt("Do you want to include uppercase letters? If so, enter y");

  if (upper === "y") select.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  var numbers = window.prompt("Do you want to include numbers? If so, enter y");

  if (numbers === "y") select.push("1234567890");

  var special = window.prompt("Do you want to include special characters? If so, enter y");

  if (special === "y") select.push("`~!@#$%^&*()-_=+[{]}|;:',<.>/?");

  var size = Number(window.prompt("Enter the size of your password. You may choose from 8 to 128"));
  
  for(i=0; i<select.length; i++) {
    randJ = Math.floor(Math.random() * select[i].length);
    password += select[i][randJ];
  }

  for(i=select.length; i<size; i++) {
    randI = Math.floor(Math.random() * select.length);
    randJ = Math.floor(Math.random() * select[randI].length);
    password += select[randI][randJ];
  }

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
