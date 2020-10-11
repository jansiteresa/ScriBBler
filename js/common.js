
// Get the modal
var signInModel = document.getElementById("SignInModel");
var signUpModel = document.getElementById("SignUpModel");

// Get the button that opens the modal
var signInBtn = document.getElementById("SignInBtn");
var signUpBtn = document.getElementById("SignUpBtn");

// Get the <span> element that closes the modal
var signInSpan = document.getElementById("SignInSpan");
var signUpSpan = document.getElementById("SignUpSpan");

// When the user clicks the button, open the modal 
signInBtn.onclick = function() {
  signInModel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signInSpan.onclick = function() {
  signInModel.style.display = "none";
}

signUpBtn.onclick = function() {
  signUpModel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
  signUpModel.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signUpModel) {
    signUpModel.style.display = "none";
  }

  if (event.target == signInModel) {
    signInModel.style.display = "none";
  }
}

// end model functionality

var btn =document.getElementById("C-SignUpBtn");
btn.onclick = function() {
  signInModel.style.display = "none";
  signUpModel.style.display = "block";
}
