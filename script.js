var generateBtn = document.querySelector("#generate");

// set password arrays
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specials = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numberChar = ['0','1','2','3','4',"5",'6','7','8','9'];

// write password to generate button
function writePassword() {
  
// prompts to user

  var passLength = parseInt(prompt("Enter desired password length bewteen 8 and 128 characters."))
  
  // need validation that returns user to this prompt

  if (isNaN(passLength)) {
    alert("You must enter a number. Please try again.")
    return
  }  else if (passLength < 8) {
    alert("Password must be at least 8 characters long. Please try again.")
    return
  }  else if (passLength > 128) {
    alert("Passwords cannot be longer than 128 characters. Please try again.")
    return
  }

  // remaining prompts to user
  var charUp = confirm("Would you like upper case letters in your password?");
  var charLow = confirm("Would you like lower case letters in your password?");
  var charNum = confirm("Would you like numbers in your password?");
  var charSpec = confirm("Would you like special characters in your password?");

  var charSelect = []

  if (charUp) {
      charSelect.push("up");
  } if (charLow) {
      charSelect.push("low");
  } if (charNum) {
      charSelect.push("num");
  } if (charSpec) {
      charSelect.push("spec");
  
    // need character type validation to ensure user selection

  } if (charSelect == 0) {
    alert("You must select at least one character type for your password. Please try again.")
    return;
  }

  function generatePassword() {
    var password = "";

    for (var i = 0; i < passLength; i++) {
      var x = charSelect[Math.floor(Math.random() * charSelect.length)];
     
      function lowerCased() {
        var y = lowerCases[Math.floor(Math.random() * lowerCases.length)];
        return password += y;
      }

      function upperCased() {
        var y = upperCases[Math.floor(Math.random() * upperCases.length)];
        return password += y;
      }

      function number() {
        var y = numberChar[Math.floor(Math.random() * numberChar.length)];
        return password += y;
      }

      function special() {
        var y = specials[Math.floor(Math.random() * specials.length)];
        return password += y;
      }
      
      if (x == "up") {
        upperCased();
      } if (x == "low") {
        lowerCased();
      } if (x == "num") {
        number();
      } if (x == "spec") {
        special();
      }
    }
    return password
  }

  // return password to the page
  document.getElementById("password").innerHTML = generatePassword(password);
}

generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", document.getElementById('password').removeAttribute('readonly'));