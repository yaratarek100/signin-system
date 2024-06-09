var signupName = document.querySelector(`.signup input[type="text"]`);
var signupEmail = document.querySelector(`.signup input[type="email"]`);
var signupPass = document.querySelector(`.signup input[type="Password"]`);
var signupSubmit = document.querySelector(`#submitup`);
var signupAlert = document.querySelector(`.signup .alert`);

var usersData = JSON.parse(localStorage.getItem("usersData")) || [];

// display message to the user
function display(message, color) {
  signupAlert.innerHTML = message;
  signupAlert.style.color = color;
  signupAlert.style.display = "block";
}
// signup click
signupSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // empty inputs
  if (
    (signupName.value == "") |
    (signupEmail.value == "") |
    (signupPass.value == "")
  ) {
    display("All inputs is required", "rgb(209, 41, 41)");
  } else {
    // email validation
    if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signupEmail.value)
    ) {
      // confirme email is not used
      if (usersData.some((user) => user.userEmail == signupEmail.value)) {
        display("Email already in use", "orange");
      } else {
        // registration
        var newUser = {
          userName: signupName.value,
          userEmail: signupEmail.value,
          userPass: signupPass.value,
        };
        usersData.push(newUser);
        localStorage.setItem("usersData", JSON.stringify(usersData));
        display("Sign up successful", "green");
      }
    } else {
      // email is not valied
      display("Invalid email address", "rgb(209, 41, 41)");
    }
  }
});
