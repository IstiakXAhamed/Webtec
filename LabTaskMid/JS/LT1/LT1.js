const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");

const fullNameErr = document.getElementById("fullNameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const confirmErr = document.getElementById("confirmErr");
const phoneErr = document.getElementById("phoneErr");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  fullNameErr.innerText = "";
  emailErr.innerText = "";
  passwordErr.innerText = "";
  confirmErr.innerText = "";
  phoneErr.innerText = "";
  result.innerText = "";

  let hasError = false;

  if (fullName.value.trim() === "") {
    fullNameErr.innerText = "Full Name required";
    hasError = true;
  }

  if (email.value.trim() === "") {
    emailErr.innerText = "Email required";
    hasError = true;
  }

  if (password.value.length < 6) {
    passwordErr.innerText = "Password must be at least 6 characters";
    hasError = true;
  }

  if (confirmPassword.value !== password.value) {
    confirmErr.innerText = "Passwords do not match";
    hasError = true;
  }

  if (phone.value.trim() === "") {
    phoneErr.innerText = "Phone required";
    hasError = true;
  } else if (isNaN(phone.value)) {
    phoneErr.innerText = "Phone must contain digits only";
    hasError = true;
  }

  if (hasError) {
    event.preventDefault();
  } else {
    event.preventDefault(); // ETA HOCHE EVENT SUBMISSION PREVENT ER JONNO DIYECHI , SO THAT AMRA RESULT ER TEXT DEKHTE PARI .
    // ELSE ONK FAST SUBMIT HOIYE JAI AMRA RESULT DEKHTEI PAI NA
    result.innerText = "Registration Successful!";
  }
});
