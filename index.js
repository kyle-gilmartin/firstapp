const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let books = [];

// task 1
app.get("/", (req, res) => res.send("Hello World from Kyle!"));

// task 2
app.get("/football", (req, res) =>
    res.send("Liverpool is the best team in the prem")
);

// task 3

app.get("/books", (req, res) => {
    res.send(books);
});

// task 5
app.get("/books/:id", (req, res) => {
    let id = req.params.id;
    res.json(books[id]);
});

// task 6
app.delete("/books/:id", (req, res) => {
    let id = req.params.id;
    console.log(`removing book ${books[id].name}`);
    books.splice(req.params.id, 1);
    res.send(books);
});

app.post("/book", (req, res) => {
    const book = req.body;
    books.push(book);

    res.send("book has been added to the database");
    console.log(`book name is ${book.name} number of book is ${books.length}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));