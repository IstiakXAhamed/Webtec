const form = document.getElementById("refForm");
const inputs = document.querySelectorAll(".inputs");
const error = document.querySelectorAll(".error");
const fileErr = document.getElementById("FileErr");
const countryERR = document.getElementById("countryERR");


form.addEventListener("submit", (event) => {
  // set all error text color
  error.forEach((x) => (x.style.color = "red"));

  let hasERR = false;

  // Name
  if (!inputs[0].value.trim()) {
    error[0].innerText = "Name cannot be empty";
    hasERR = true;
  } else {
    for (let ch of inputs[0].value) {
      if (!((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
        error[0].innerHTML = "Special Character not Allowed!";
        hasERR = true;
        break;
      }
    }
  }
  // Age
  const ageRaw = inputs[1].value.trim();
  const ageNum = Number(ageRaw);
  if (ageRaw === "") {
    error[1].innerHTML = "Age can't be empty!";
    hasERR = true;
  } else if (isNaN(ageNum) || ageNum < 1 || ageNum > 100) {
    error[1].innerHTML = "Age must be a number between 1 and 100";
    hasERR = true;
  }

  // Email
  if (!inputs[2].value.trim()) {
    error[2].innerHTML = "Email can't be empty!";
    hasERR = true;
  }

  // Gender (assumes inputs[3] and inputs[4] are the two radio buttons)
  if (!(inputs[3].checked || inputs[4].checked)) {
    error[3].innerHTML = "You must select one gender!";
    hasERR = true;
  }

  // Sports (assumes inputs[5] and inputs[6] are the two checkboxes)
  // NOTE: adjust indexes if your HTML order is different
  if (!(inputs[5].checked || inputs[6].checked)) {
    error[4].innerHTML = "At least one sport must be selected!";
    hasERR = true;
  }

  if (country.value.trim() === "") {
    hasERR = true;
    countryERR.innerHTML = "country should be selected";
    countryERR.style.color = "red";
  }

  if (fileUpload.value.trim() === "") {
    hasERR = true;
    fileERR.innerHTML = "file Should be uploaded";
    fileERR.style.color = "red";
  }

  if (hasERR) {
    event.preventDefault();
  } else {
    alert("Reg Complete!");
  }
});
