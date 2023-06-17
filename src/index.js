import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import Book from "./Book";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <>
      <h1 className="title">amazon best sellers</h1>
      <section className="bookList">
        {books.map((book) => {
          const { id } = book;
          return <Book key={id} {...book} />;
        })}
      </section>
    </>
  );
};

root.render(<BookList />);
