/**
 * ! Adding a first form validation
 * **/
let getById = (id) => document.getElementById(id);
let getByClass = (classes) => document.getElementsByClassName(classes);

const usernameForm1 = getById("username"),
  usernameForm2 = getById("usernameForm2"),
  passwordForm1 = getById("password"),
  passwordForm2 = getById("passwordForm2"),
  emailForm1 = getById("email"),
  form1 = getById("form"),
  form2 = getById("login");
(errorMsg = getByClass("error")),
  (successIcon = getByClass("success-icon")),
  (failureIcon = getByClass("failure-icon"));

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  validateField(usernameForm1, 0, "Username cannot be empty");
  validateField(emailForm1, 1, "Email cannot be empty");
  validateField(passwordForm1, 2, "Password cannot be empty");
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
  if (field === usernameForm1) {
    return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
      field.value.trim(),
    );
  } else if (field === emailForm1) {
    return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
      field.value.trim(),
    );
  } else if (field === passwordForm1) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
      field.value.trim(),
    );
  }
}

/**
 * ! Adding a second form validation
 * **/
form2.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFieldForLogin(usernameForm2, 0, "Username cannot be empty");
  validateFieldForLogin(passwordForm2, 2, "Password cannot be empty");
});

function isValidFieldForLogin(field) {
  if (field === usernameForm2) {
    return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
      field.value.trim(),
    );
  } else if (field === passwordForm2) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{12,}$/.test(
      field.value.trim(),
    );
  }
}

function validateFieldForLogin(field, serial, message) {
  if (field.value.trim() === "") {
    onError(serial, `${field.id} is not valid`);
  } else {
    if (!isValidFieldForLogin(field)) {
      onError(serial, `${field.id} is not valid for login`);
    } else {
      onSuccess(serial, `${field.id} is valid for login`);
    }
  }
}
