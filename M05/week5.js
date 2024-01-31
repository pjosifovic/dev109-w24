alert("Welcome user!");
var message,
    firstname,
    lastname;

firstname = prompt("What's your first name?");
lastname = prompt("What's your last name?");
message = " " + firstname + " " + lastname;

var el = document.getElementById("hello");
el.textContent += message;
