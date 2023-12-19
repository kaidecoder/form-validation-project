let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"), 
password = id("password"),
email = id("email"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes('success-icon'),
failureIcon = classes("failure-icon")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorMsg[2].innerHTML = "hello world"
})

