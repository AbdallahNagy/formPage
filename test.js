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

let bookNameData = "atomic habits";
let authorNameData = "james clear";
let priceData = 40;
let emailData = "jamesclear@gmail.com";

let author = new Author(authorNameData, emailData);
let book = new Book(bookNameData, priceData, author);

bookArr[0] = book;