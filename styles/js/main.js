const emailLength = 4;
const passwordLength = 6;
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const toggleError = (element, err, charLength) => {
    if (element.value.match(pattern) < charLength) {
        element.classList.toggle('redBorder');
        err.classList.add('fa-times')
        err.classList.remove('fa-check')
        return false;
    }
    element.classList.toggle('greenBorder');
    err.classList.add('fa-check')
    err.classList.remove('fa-times')
}

const mySubmit = (e) => {
    const err = 'Please Enter All Fields';
    const success = 'Successful login'
    const timeOut = (content, color = 'red') => {
        error.innerHTML = content
        error.style.color = color
        setTimeout(() => error.innerHTML = "", 3000)
    }
    e.preventDefault();
    toggleError(email, errEmail, emailLength)
    toggleError(password, errPassword, passwordLength)
    if (email.value.match(pattern) < emailLength || password.value < passwordLength) {
        timeOut(err)
        return false
    }
    timeOut(success, "green")
}

checkbox.addEventListener("change", () => document.body.classList.toggle("dark"));
email.addEventListener('keyup', () => toggleError(email, errEmail, emailLength))
password.addEventListener('keyup', () => toggleError(password, errPassword, passwordLength))
form.addEventListener('submit', mySubmit);