function validateForm() {
  var validFirstname = false;
  var validLastname = false;
  var validPhone = false;
  var validEmail = false;
  var validUsername = false;
  var validPassword = false;
  var validCity = false;
  var validAddress = false;
  var validState = false;
  var validCountry = false;
  var validZipCode = false;
  var errorMessages = "";
  var passw = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

  /************** VALIDATE FIRST NAME **********************/
  FirstName.addEventListener("blur", FirstName, false);
  var firstname = document.getElementById("FirstName").value;

  if (firstname === null || firstname === "" || firstname.length > 20) {
    errorMessages +=
      "<p>The first name is required and cannot be greater than 20 characters</p>";
    document.getElementById("FirstName").classList.add("errorMessages");
    console.log("First name INVALID — length");
  } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    document.getElementById("FirstName").classList.add("errorMessages");
    console.log("First name INVALID — bad characters");
  } else {
    document.getElementById("FirstName").classList.remove("errorMessages");
    validFirstname = true;
    console.log("First name valid", firstname);
  }

  /************** VALIDATE LAST NAME **********************/
  LastName.addEventListener("blur", LastName, false);
  var lastname = document.getElementById("LastName").value;

  if (lastname === null || lastname === "" || lastname.length > 50) {
    errorMessages +=
      "<p>The last name is required and cannot be greater than 50 characters</p>";
    document.getElementById("LastName").classList.add("errorMessages");
    console.log("Last name INVALID — length");
  } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    document.getElementById("LastName").classList.add("errorMessages");
    console.log("Last name INVALID — bad characters");
  } else {
    document.getElementById("LastName").classList.remove("errorMessages");
    validLastname = true;
    console.log("Last name valid", lastname);
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

  /************** VALIDATE PHONE NUMBER **********************/
  Phone.addEventListener("blur", Phone, false);
  var phone = document.getElementById("Phone").value;

  if (phone.length > 15 || phone === null || phone === "") {
    errorMessages +=
      "<p>Phone number is required and cannot be greater than 15 characters</p>";
    document.getElementById("Phone").classList.add("errorMessages");
    console.log("Phone invalid - lenght");
  } else if (isNaN(phone)) {
    errorMessages +=
      "<p>Invalid character in phone number (accepts only 0-9)</p>";
    document.getElementById("Phone").classList.add("errorMessages");
    console.log("Phone invalid - bad characters");
  } else {
    document.getElementById("Phone").classList.remove("errorMessages");
    validPhone = true;
    console.log("Phone is valid", phone);
  }

  /************** VALIDATE USER NAME **********************/
  UserName.addEventListener("blur", UserName, false);
  var username = document.getElementById("UserName").value;

  if (username === null || username === "") {
    errorMessages += "<p>The user name is required</p>";
    document.getElementById("UserName").classList.add("errorMessages");
    console.log("User name invalid — length");
  } else {
    document.getElementById("UserName").classList.remove("errorMessages");
    validUsername = true;
    console.log("User name valid", username);
  }

  /************** VALIDATE PASSWORD **********************/
  Password.addEventListener("blur", Password, false);
  var password = document.getElementById("Password").value;

  if (password === null || password === "" || password.length > 7) {
    errorMessages += "<p>The password is required</p>";
    document.getElementById("Password").classList.add("errorMessages");
    console.log("Password invalid — length");
  } else if (password.match(passw) === null) {
    errorMessages +=
      "<p>Invalid password (need at lease 1 UPPER, 1 lower, 1 number and 1 special character)</p>";
    document.getElementById("Password").classList.add("errorMessages");
    console.log("Password INVALID — bad characters");
  } else {
    document.getElementById("Password").classList.remove("errorMessages");
    validPassword = true;
    console.log("Password valid", password);
  }

  /************** VALIDATE CITY **********************/
  City.addEventListener("blur", City, false);
  var city = document.getElementById("City").value;

  if (city === null || city === "") {
    errorMessages += "<p>The city is required</p>";
    document.getElementById("City").classList.add("errorMessages");
    console.log("City invalid — length");
  } else {
    document.getElementById("City").classList.remove("errorMessages");
    validCity = true;
    console.log("City valid", city);
  }

  /************** VALIDATE ADDRESS **********************/
  Address.addEventListener("blur", Address, false);
  var address = document.getElementById("Address").value;

  if (address === null || address === "") {
    errorMessages += "<p>The address is required</p>";
    document.getElementById("Address").classList.add("errorMessages");
    console.log("Address invalid — length");
  } else {
    document.getElementById("Address").classList.remove("errorMessages");
    validAddress = true;
    console.log("Address valid", address);
  }

  /************** VALIDATE STATE **********************/
  State.addEventListener("blur", State, false);
  var state = document.getElementById("State").value;

  if (state === null || state === "" || state === "000") {
    errorMessages += "<p>The state is required</p>";
    document.getElementById("State").classList.add("errorMessages");
    console.log("State invalid — length");
  } else {
    document.getElementById("State").classList.remove("errorMessages");
    validState = true;
    console.log("State valid", state);
  }

  /************** VALIDATE COUNTRY **********************/
  Country.addEventListener("blur", Country, false);
  var country = document.getElementById("Country").value;

  if (country === null || country === "" || country === "000") {
    errorMessages += "<p>The country is required</p>";
    document.getElementById("Country").classList.add("errorMessages");
    console.log("Country invalid — length");
  } else {
    document.getElementById("Country").classList.remove("errorMessages");
    validCountry = true;
    console.log("Country valid", country);
  }

  /************** VALIDATE ZIPCODE **********************/
  ZipCode.addEventListener("blur", ZipCode, false);
  var zipcode = document.getElementById("ZipCode").value;

  if (country === "USA" && zipcode.length !== 5) {
    errorMessages += "<p>The zipcode [5 number] is required</p>";
    document.getElementById("ZipCode").classList.add("errorMessages");
    console.log("Zipcode invalid — length");
  } else {
    document.getElementById("ZipCode").classList.remove("errorMessages");
    validZipCode = true;
    console.log("Zipcode valid", zipcode);
  }

  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = errorMessages;

  //5) return status of each field
  return (
    validFirstname &&
    validLastname &&
    validPhone &&
    validEmail &&
    validUsername &&
    validPassword &&
    validCity &&
    validAddress &&
    validState &&
    validCountry &&
    validZipCode
  );
}
