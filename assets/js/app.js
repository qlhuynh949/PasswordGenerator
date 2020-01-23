String.prototype.shuffle = function () {
  let a = this.split(""),
    n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

function generatePassword() {

  let passwordLength = parseInt(document.querySelector("#inputPasswordLength").value);
  let hasNumber = document.querySelector("#numberCheck").checked
  let hasUpperCase = document.querySelector("#upperCaseCheck").checked
  let hasLowerCase = document.querySelector("#lowerCaseCheck").checked
  let hasSpecialCharacter = document.querySelector("#specialCharacterCheck").checked

  if (!hasNumber && !hasUpperCase && !hasLowerCase && !hasSpecialCharacter) {
    alert("Please check off at least one of the check box options. (Either has numbers, has upper case letters, has lower case letters, or has special characters)")
  }

  if (!(passwordLength == NaN) && (passwordLength >= 8) && (passwordLength <= 128)
    && !(!hasNumber && !hasUpperCase && !hasLowerCase && !hasSpecialCharacter)
  ) {

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charsetLower = "abcdefghijklmnopqrstuvwxyz"
    let charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charsetNumber = "0123456789"
    let charsetSpecial = "!§$%&/()=?{}"
    let genPassword = ""
    let genPasswordLen = passwordLength


    if (hasNumber) {
      let randNum = Math.floor(Math.random() * charsetNumber.length)
      genPassword += charsetNumber[randNum]
      genPasswordLen--
    }
    if (hasUpperCase) {
      let randUpper = Math.floor(Math.random() * charsetUpper.length)
      genPassword += charsetUpper[randUpper]
      genPasswordLen--
    }
    if (hasLowerCase) {
      let randLower = Math.floor(Math.random() * charsetLower.length)
      genPassword += charsetLower[randLower]
      genPasswordLen--
    }
    if (hasSpecialCharacter) {
      let randSpecial = Math.floor(Math.random() * charsetSpecial.length)
      genPassword += charsetSpecial[randSpecial]
      genPasswordLen--
    }
    for (let i = 0, n = charset.length; i < genPasswordLen; ++i) {
      genPassword += charset[Math.floor(Math.random() * n)]
    }
    document.querySelector("#generatedPassword").value = genPassword.shuffle()
    $("#passwordModal").modal("hide");
  }
  else {
    onFocusOutValidatePasswordLength()
  }
}
function onFocusOutValidatePasswordLength() {
  let passwordLength = parseInt(document.querySelector("#inputPasswordLength").value);
  if (passwordLength == NaN || passwordLength < 8 || passwordLength > 128) {
    {
      alert("Password length is not beween 8 and 128 characters")
    }
  }
}