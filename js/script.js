var signinEmail = document.querySelector(`.signin input[type="email"]`);
var signinPass = document.querySelector(`.signin input[type="Password"]`);
var signinSubmit = document.querySelector(`#submitin`);
var signinAlert = document.querySelector(`.signin .alert`);
var usersData = JSON.parse(localStorage.getItem("usersData")) || [];

// display message to the user
function display(message, color) {
  signinAlert.innerHTML = message;
  signinAlert.style.color = color;
  signinAlert.style.display = "block";
}

signinSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if ((signinEmail.value == "") | (signinPass.value == "")) {
    display("All inputs is required", "rgb(209, 41, 41)");
  } else {
    // serch for email
    var user = usersData.find((user) => user.userEmail == signinEmail.value);
    if (user) {
      // check password

      if (user.userPass == signinPass.value) {
        display("Login successful", "green");
        var currentUser = user.userName.split(" ")[0];
        localStorage.setItem("currentUser", currentUser);
        setTimeout(() => {
          window.location.href = "home.html";
        }, 400);
      } else {
        display("Incorrect password", "rgb(209, 41, 41)");
      }
    } else {
      display("Incorrect email", "rgb(209, 41, 41)");
    }
  }
});
