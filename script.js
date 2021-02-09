// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
 
//generate password
function generatePassword(pwlength) {
  // request user input for password length
  var pwlength = prompt("Designate length of password between 8 and 128 characters")
  if (pwlength <8 || pwlength >128) {
    alert("password must be between 8 and 128");
      location.reload()
    } else {
      // Designate PW criteria
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var lower = "abcdefghijklmnopqrstuvwxyz"
      var integer = "123456789"
      var spec = "!@#$%^&*?"
      var allChars = upper + lower + integer + spec
      // Run for-loop to generate pw
      var generatePassword = ""
      for (var i = 0; i < pwlength; i++) {
      pwlength.value += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return generatePassword;
  }
}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword())
