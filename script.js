//email input form
var firstName = document.getElementById("first-name").value;
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var submitButton = document.getElementById("submit-button");



// check that entry is a letter
function checkLetter() {
  var reg = /^[a-zA-Z]+$/i;

  // testing logic - change to check-mark  or X once it works!
  if (firstName.match(reg)) {
    console.log("success " + firstName);
  } else {
    console.log("try again" + firstName);
  }
}


// on keystroke - name input- if entry is letters and spaces no numbers or special characters, display green checkbox; else display red x
document.getElementById("first-name").onkeypress = function() {
  checkLetter()
};






// on click - if first name and last name and email are valid allow submit
