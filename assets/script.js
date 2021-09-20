// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  function generatePassword(){
    let numChar = window.prompt("How many characters would you like your password to contain?");
    if (numChar>8 && numChar<128){
      let uppLow = window.prompt("Would you like your password to contain uppercase letters? ('yes' or 'no')");

      if (uppLow === 'yes' || 'no'){
        let numNum = window.prompt("Would you like your password to contain numbers? ('yes' or 'no')")
        if (numNum === 'yes' || 'no'){
          let userConf = window.confirm("Your password will contain the following: " + numChar + " characters, " + uppLow + " uppercase letters, and " + numNum + " numbers.")
          if (userConf == true){
            let lowChar = "qwertyuiopasdfghjklzxcvbnm"
            let uppChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
            let numPass = "1234567890"
            
            let characters = lowChar; 
            uppLow === 'yes' ? characters += uppChar : ''; 
            numNum === 'yes' ? characters += numPass : '';

              let finalPass = '';
              for (let i = 0; i < numChar; i++) {
                finalPass += characters.charAt(
                  Math.floor(Math.random() * characters.length)
                );
              }
              return finalPass;
              

          } else {
            // return ' '
            return;
          }
        } else {
          window.prompt("Must enter either 'yes' or 'no'.")
        }
      } else {
        window.prompt("Must enter either 'yes' or 'no'.")
      }
    } else {
      window.alert("Must enter numerical value between 8-128.");
    }

    



  }
  passwordText.value = password;

}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

