
var userwellcome = document.querySelector(`span`);

var currentUser = localStorage.getItem("currentUser") || "";
userwellcome.innerText=currentUser;

