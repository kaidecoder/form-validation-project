let getById = (id) => document.getElementById(id);
let getByClass = (classes) => document.getElementsByClassName(classes);

let username = getById("username"),
  password = getById("password"),
  email = getById("email"),
  form = getById("form"),
  errorMsg = getByClass("error"),
  successIcon = getByClass("success-icon"),
  failureIcon = getByClass("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateField(username, 0, "Username cannot be empty");
  validateField(email, 1, "Email cannot be empty");
  validateField(password, 2, "Password cannot be empty");
});

let validateField = (field, serial, message) => {
  if (field.value.trim() === "") {
    onError(serial, `${field.id} is not valid`);
  } else {
    if (!isValidField(field)) {
      onError(serial, `${field.id} is not valid`);
    } else {
      onSuccess(serial, `${field.id} is valid`);
    }
  }
};

function onSuccess(serial, message) {
  clearError(serial);
  successIcon[serial].style.opacity = "1";
}

function onError(serial, message) {
  errorMsg[serial].innerHTML = message;
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";
}

function clearError(serial) {
  errorMsg[serial].innerHTML = "";
  failureIcon[serial].style.opacity = "0";
}

function isValidField(field) {
  if (field === username) {
    return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
      field.value.trim()
    );
  } else if (field === email) {
    return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
      field.value.trim()
    );
  } else if (field === password) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
      field.value.trim()
    );
  }
}
