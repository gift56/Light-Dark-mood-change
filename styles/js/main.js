const check = document.querySelector("#checkbox");

check.addEventListener("change", myCheck);

function myCheck(e) {
    document.body.classList.toggle("dark");
}