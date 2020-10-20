import express from "express";

import db from "../models/bookService";

const router = express.Router();

router.post("/", (req, res) => {
    const book = req.body;
    // note: there is no validation of the request data here.
    // to be added later

    db.createBook(book);

    let books = [];

    router.post("/", (req, res) => {
        const book = req.body;
        books.push(book);

        res.send("book has been added to the database");
        console.log(`book name is ${book.name} number of book is ${books.length}`);
    });
});
export default router;