const form = document.querySelector("form");
const input = document.querySelector("#booksNo");
const submit = document.querySelector(".btn");
const errorSpan = document.querySelector(".error");

submit.addEventListener("click", (e) => {
    if(input.value === ""){
        e.preventDefault();
        errorSpan.textContent = "field required";
    }
});