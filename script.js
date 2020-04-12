document.addEventListener('DOMContentLoaded', () => {
  var emailInput = document.querySelector("#email");
  var passwordInput = document.querySelector("#password");
  var signUpButton = document.querySelector("#sign-up");
  var userEmailSpan = document.querySelector("#user-email");
  var userPasswordSpan = document.querySelector("#user-password");

  // console.log(emailInput)
  // console.log(passwordInput)
  // console.log(signUpButton)
  // console.log(userEmailSpan)
  // console.log(userPasswordSpan)

  function renderLastRegistered() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if (email && password === null) {
        return;
    }

    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
  }

  renderLastRegistered();

  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
        displayMessage("error", "Password cannot be blank");
    } else {
        displayMessage("success", "Registered successfully");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderLastRegistered();
    }
  });
})
