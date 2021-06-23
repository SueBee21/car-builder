//email input form
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var submitButton = document.getElementById("submit-button");

// on keystroke - name input- if entry is letters and spaces no numbers or special characters, display green checkbox; else display red x

function checkletters() {
  var reg = /^[a-z]+$/i;
  console.log(reg);
  console.log(reg.test("something"));

  var testName = "test2";

  if (testName.match(reg)) {
    console.log("success");
  } else {
    console.log("try again!");
  }
}
checkletters()
// on keystroke email input - if entry is valid email display green check else display red x

// on click - if first name and last name and email are valid allow submit
