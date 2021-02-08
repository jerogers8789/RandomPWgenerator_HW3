// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Define generatePassword function
function generatePassword(pwlength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars
  var pwgen = PWarray(pwlength)
  pwgen[0] = numberChars;
  pwgen[1] = upperChars;
  pwgen[2] = lowerChars;
  pwgen = pwgen.fill(allChars, 3);
  return shuffpwgen(pwgen.map(function (x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}
function shuffpwgen(array) {
  for (var i = array.length -1; i > 0; i--){
    var y = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
