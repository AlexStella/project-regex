const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".cta");
const errorMsg1 = document.querySelector(".error-msg1");
const errorMsg2 = document.querySelector(".error-msg2");
const errorMsg3 = document.querySelector(".error-msg3");
const errorMsg4 = document.querySelector(".error-msg4");
const svgs = document.querySelectorAll("svg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  let value1 = fname.value;
  let value2 = lname.value;
  let value3 = email.value;
  let value4 = password.value;

  let regex = /^([\w.-]){2,30}@[a-z0-9]{2,30}\.[a-z0-9]/;

  [errorMsg1, errorMsg2, errorMsg3, errorMsg4].forEach(function (detail) {
    detail.innerHTML = "";
  });

  function attribute(element, attr) {
    let a = attr.getAttribute("placeholder");
    element.innerHTML = `${a} should not be empty`;
    element.classList.add("error");
    valid = false;
  }

  if (!value1) {
    attribute(errorMsg1, fname);
    svgIcon();
  }

  if (!value2) {
    attribute(errorMsg2, lname);
  }

  if (!value3) {
    attribute(errorMsg3, email);
  } else if (!regex.test(value3)) {
    errorMsg3.innerHTML = `Looks like this is not an email`;
    errorMsg3.classList.add("error");
    valid = false;
  }

  if (!value4) {
    attribute(errorMsg4, password);
  }

  if (valid) {
    alert("Form submitted successfully");
    reset();
    valid = true;
  }
});

function reset() {
  fname.value = "";
  lname.value = "";
  email.value = "";
  password.value = "";
}

function svgIcon() {
  svgs.forEach(function (icon) {
    icon.classList.add("error");
  });
}
