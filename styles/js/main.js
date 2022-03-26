checkbox.addEventListener("change", () => document.body.classList.toggle("dark"));

email.addEventListener('keyup', () => {
    let err = document.getElementById('times');
    let good = document.getElementById('check');

    if (email.value.length = 0 || email.value.length < 4) {
        email.style.border = '1px solid red';
        err.style.display = 'block';
        good.style.display = 'none';
        return false;
    }
    else {
        email.style.border = '1px solid green';
        err.style.display = 'none';
        good.style.display = 'block';
    }
})
password.addEventListener('keyup', () => {
    let err = document.getElementById('ptimes');
    let good = document.getElementById('pcheck');

    if (password.value.length = 0 || password.value.length < 4) {
        password.style.border = '1px solid red';
        err.style.display = 'block';
        good.style.display = 'none';
        return false;
    }
    else {
        password.style.border = '1px solid green';
        err.style.display = 'none';
        good.style.display = 'block';
    }
})

const sub = document.getElementById('form');

sub.addEventListener('submit', mySubmit);

function mySubmit(e) {
    e.preventDefault();
    if (email.value == 0 || email.value < 6) {
        document.querySelector('#error').innerHTML = 'Please Enter All Fields';
        setTimeout(() => error.remove(), 3000);
    } else if (password.value == 0 || password.value < 6) {
        document.querySelector('#error').innerHTML = 'Please Enter All Fields';
        document.querySelector('#error').innerHTML = 'Please Enter All Fields';
        setTimeout(() => error.remove(), 3000);
    } else {
        document.getElementById('success').innerHTML ='Successful login';
        setTimeout(() => success.remove(), 1000);
    }
}
