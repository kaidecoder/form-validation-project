let getId = (id) => document.getElementById(id)
let getClass = (classes) => document.getElementsByClassName(classes)

let username = getId("username"), 
password = getId("password"),
email = getId("email"),
form = getId("form"),
errorMsg = getClass("error"),
successIcon = getClass('success-icon'),
failureIcon = getClass("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    validateInput(username, 0, "username cannot be empty")
    validateInput(email, 1, "email cannot be empty")
    validateInput(password, 2, "password cannot be empty")
})

let validateInput = (input, serial, message) => {
    if(input.value.trim() === ""){
        onError(serial, `${input.id} is empty`)
    }else{
        if(!isValidInput(input)){
            onError(`${serial}`, `${input.id} is not valid`)
        }else{
            onSuccess(`${serial}`, `${input.id} is valid`)
        }
    }
}

function onSuccess(serial, message) {
    // console.log(input.value);
    clearError(serial)
    successIcon[serial].style.opacity = "1"
  }

function onError(serial, message) {
    // console.log(input.value);
    errorMsg[serial].innerHTML = message
    failureIcon[serial].style.opacity = "1"
    successIcon[serial].style.opacity = "0"
  }

  function clearError(serial) {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
  }

function isValidInput(input){
    if(input === username){
        return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
            input.value.trim()
          );
    }else if(input === email){
        return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
            input.value.trim()
          );
    }else if(input === password){
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
            input.value.trim()
          );
    }
}


/**
 * TODO: 
### For the Registration Form section of the page, implement the following validation requirements:
*! Registration Form - Username Validation:
- The username cannot be blank.
- The username must be at least four characters long.
- The username must contain at least two unique characters.
- The username cannot contain any special characters or whitespace.
*! Registration Form - Email Validation:
- The email must be a valid email address.
- The email must not be from the domain "example.com."
*!  Registration Form - Password Validation:
- Passwords must be at least 12 characters long.
- Passwords must have at least one uppercase and one lowercase letter.
- Passwords must contain at least one number.
- Passwords must contain at least one special character.
- Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
- Passwords cannot contain the username.
- Both passwords must match.
*!  Registration Form - Terms and Conditions:
- The terms and conditions must be accepted.
*!  Registration Form - Form Submission:
- Usually, we would send this information to an external API for processing. In our case, we are going to process and store the data locally for practice purposes.
- If all validation is successful, store the username, email, and password using localStorage.
- If you are unfamiliar with localStorage, that is okay! Reference the documentation's "Description" and "Examples" sections to learn how to implement it. If you run into issues speak with a peer or one of your instructors.
- Consider how you want to store the user data, keeping in mind that there will be quite a few users registering for the site. Perhaps you want to store it with an array of user objects; or maybe an object whose keys are the usernames themselves.
- Valid usernames should be converted to all lowercase before being stored.
- Valid emails should be converted to all lowercase before being stored.
- Clear all form fields after successful submission and show a success message.
*!  Registration Form - Username Validation (Part Two):
- Now that we are storing usernames, create an additional validation rule for them...
- Usernames must be unique ("that username is already taken" error). Remember that usernames are being stored all lowercase, so "learner" and "Learner" are not unique.

*!  Part 4: Login Form Validation Requirements
*? For the Login Form section of the page, implement the following validation requirements:
- Login Form - Username Validation:
- The username cannot be blank.
- The username must exist (within localStorage). - Remember that usernames are stored in all lowercase, but the username field accepts (and should not invalidate) mixed-case input.
- Login Form - Password Validation:
- The password cannot be blank.
- The password must be correct (validate against localStorage).
## Login Form - Form Submission:
- If all validation is successful, clear all form fields and show a success message.
- If "Keep me logged in" is checked, modify the success message to indicate this (normally, this would be handled by a variety of persistent login tools and technologies).  
### 

 * **/


/**
 * ! Chap GPT HELP
 * 
 * It looks like you've written a JavaScript code snippet for form validation. The code appears to be using a modular approach to handle different form fields (username, email, and password) and checking their validity. Here are a few suggestions and improvements:

Function Naming: Consider using more descriptive names for your functions. For example, instead of engine, you could use validateField or something similar.

Error Handling: It's a good practice to handle errors gracefully. For example, if id in the isValidId function is not one of the expected values (username, email, password), the function will always return false. It might be better to throw an error or handle this case differently.

Regular Expressions: The regular expressions in the isValidId function seem to be intended for validation, but you are currently testing the field values against the field elements themselves (e.g., username === id). Instead, you should use the provided id parameter.

Password Regular Expression: The regular expression for the password might need some adjustment. It seems to check for certain conditions, but the logic might need review.

Code Duplication: The onSuccess and onError functions share a lot of common code. You could refactor them to reduce duplication.


**/