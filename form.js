//get book number from prev page
const booksNo = Number(location.search.slice(1).split("=")[1]);

//inputs
const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const price = document.querySelector("#price");
const email = document.querySelector("#email");

//error spans
const bSpan = document.querySelector("#bspan");
const pSpan = document.querySelector("#pspan");
const aSpan = document.querySelector("#aspan");
const eSpan = document.querySelector("#espan");

const submit = document.querySelector("#submit");

//storing data
function Author(n, e){
    this.name = n;
    this.email = e;
}

function Book(n, p, a){
    this.name = n;
    this.price = p;
    this.author = a;
}

let bookArr = [];

let flag;
let counter = 0;
submit.addEventListener("click", (e) => {
    e.preventDefault();
    flag = false;

    //validations
    let nameEx = /[a-zA-Z]/;
    let emailEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numEx = /[0-9]/;

    //book name
    if(bookName.value === "" || !nameEx.test(bookName.value)){
        bSpan.textContent = "please provide a valid name";
        flag = true;
    }else {
        bSpan.textContent = "";
    }

    //price
    if(!numEx.test(price.value)){
        pSpan.textContent = "please provide a valid price";
        flag = true;
    }else {
        pSpan.textContent = "";
    }

    //author name
    if(authorName.value === "" || !nameEx.test(authorName.value)){
        aSpan.textContent = "please provide a valid name";
        flag = true;
    }else {
        aSpan.textContent = "";
    }

    //email
    if(email.value === "" || !emailEx.test(email.value)){
        eSpan.textContent = "please provide a valid email";
        flag = true;
    }else {
        eSpan.textContent = "";
    }

    //if inputs correct, assign to show page
    //repeat form as much he put how many books
    if(!flag){

        //store data
        let bookNameData = bookName.value;
        let authorNameData = authorName.value;
        let priceData = price.value;
        let emailData = email.value;

        let author = new Author(authorNameData, emailData);
        let book = new Book(bookNameData, priceData, author);

        bookArr[counter] = book;
        console.log(bookArr);

        //clearing inputs
        bookName.value ="";
        authorName.value ="";
        price.value ="";
        email.value ="";

        if(counter === booksNo-1){
            location.assign("show.html");
        }

        counter++;
    }
}); 
