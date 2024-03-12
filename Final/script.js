function validateForm() {
  var validName = false;
  var validEmail = false;
  var errorMessages = "";

  /************** VALIDATE NAME **********************/
  Name.addEventListener("blur", Name, false);
  var name = document.getElementById("Name").value;

  if (name === null || name === "" || name.length > 20) {
    errorMessages +=
      "<p>The name is required and cannot be greater than 20 characters</p>";
    document.getElementById("Name").classList.add("errorMessages");
    console.log("Name INVALID — length");
  } else if (name.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      "<p>Invalid character in the name (accepts only A-Z, a-z, and ,.'-)</p>";
    document.getElementById("Name").classList.add("errorMessages");
    console.log("Name INVALID — bad characters");
  } else {
    document.getElementById("Name").classList.remove("errorMessages");
    validName = true;
    console.log("Name valid", name);
  }

  /************** VALIDATE EMAIL **********************/
  EMail.addEventListener("blur", EMail, false);
  var email = document.getElementById("EMail").value;

  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (email === null || email === "") {
    errorMessages += "<p>Email is required</p>";
    document.getElementById("EMail").classList.add("errorMessages");
    console.log("Last name INVALID — length");
  } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    errorMessages += "<p>Email form is invalid</p>";
    document.getElementById("EMail").classList.add("errorMessages");
    console.log("Last name INVALID — email form");
  } else {
    document.getElementById("EMail").classList.remove("errorMessages");
    validEmail = true;
    console.log("Email is valid", email);
  }

  // Send error message to HTML
  document.getElementById("errorMessages").innerHTML = errorMessages;

  // Return status of each field
  return validName && validEmail;
}
