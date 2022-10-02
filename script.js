// Assignment code here
function generatePassword() {

  var select = [];
  
  var lower = window.prompt(" Do you want to include lowercase letters? If so, enter y");

  if (lower === "y") select.push("abcdefghijklmnopqrstuvwxyz");

  var upper = window.prompt("Do you want to include uppercase letters? If so, enter y");

  if (upper === "y") select.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  var numbers = window.prompt("Do you want to include numbers? If so, enter y");

  if (numbers === "y") select.push("1234567890");

  var special = window.prompt("Do you want to include special characters? If so, enter y");

  if (special === "y") var count = select.push("`~!@#$%^&*()-_=+[{]}|;:',<.>/?");

  
  console.log("bacon");
  console.log(count);
  console.log(select[0]);
  console.log(select[0][0]);

  return select[0];

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
