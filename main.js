let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"), 
password = id("password"),
email = id("email"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes('success-icon'),
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    engine(username, 0, "username cannot be empty")
    engine(email, 1, "email cannot be empty")
    engine(password, 2, "password cannot be empty")
})

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        onError(id, `${id} is not valid`)
    }else{
        if(!isValidId(id.value.trim())){
            onError(`${id}`, `${id} is not valid`)
        }else{
            onSuccess(`${id}`, `${id} is valid`)
        }
    }
}

function onSuccess(serial, message) {
    // console.log(input.value);
    errorMsg[serial].innerHTML = message
    failureIcon[serial].style.opacity = "0"
    successIcon[serial].style.opacity = "1"
  }

function onError(serial, message) {
    // console.log(input.value);
    errorMsg[serial].innerHTML = message
    failureIcon[serial].style.opacity = "1"
    successIcon[serial].style.opacity = "0"
  }

function isValidId(id){
    if(id === username){
        return /^(?=\S)(?!.*[\s])(?!.*[^\w\s]).{4,}(?:(.).*?(?!\1)){2,}$/.test(
            username,
          );
    }else if(id === email){
        return /^(?!.*@example\.com)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(
            email,
          );
    }else if(id === password){
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])([^password]).{12,}$/.test(
            password,
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