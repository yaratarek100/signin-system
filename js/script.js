var signupName = document.querySelector(`.signup input[type="text"]`);
var signupEmail = document.querySelector(`.signup input[type="email"]`);
var signupPass = document.querySelector(`.signup input[type="Password"]`);
var signupsubmit = document.querySelector(`#submitup`);
var test = document.querySelector(`#test`);
var signupAlert = document.querySelector(`.signup .alert`);

var signinEmail = document.querySelector(`.signin input[type="email"]`);
var signinPass = document.querySelector(`.signin input[type="Password"]`);
// var signinsubmit = document.querySelector(`#submitin`);
console.log(signupsubmit);
var signinAlert = document.querySelector(`.signin .alert`);

var usersData = [];


document.addEventListener('DOMContentLoaded', function() {
signupSubmit.addEventListener("click", function(e) {
    e.preventDefault(); // لمنع إرسال النموذج للتجربة
    console.log("Submit button clicked");
});
    signupSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("h,metkmet");

//   if (
//     (signupName.value == "") |
//     (signupEmail.value == "") |
//     (signupPass.value == "")
//   ) {
//     signupAlert.style.display = block;
//   } else {
//     var newUser = {
//       userName: signupName.value,
//       userEmail: signupEmail.value,
//       userPass: signupPass.value,
//     };
//     usersData.push(newUser);
//     console.log(usersData);
//     localStorage.setItem("usersData", JSON.stringify(usersData));
//   }
// });


// signinSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
// });

})
})

// console.log(signupEmail);
