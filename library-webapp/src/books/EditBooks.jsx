import React, { useContext, useState } from "react";
import axios from "axios";
import ContextProvider, { Context } from "./ContextProvider";
import "../styles/style.css";

/*
TODO: Add error messages
*/

const BooksElem = (props) => {
  const { getAll } = useContext(Context);
  const id = props.id;
  const [author, setAuthor] = useState(props.book.author);
  const [title, setTitle] = useState(props.book.title);
  const [genre, setGenre] = useState(props.book.genre);

  return (
    <li>
      <form
        style={{ border: "1px solid black", marginTop: "1%" }}
        onSubmit={(event) => {
          event.preventDefault();
          let book = {
            author: author,
            title: title,
            genre: genre,
          };
          axios.put(`http://localhost:8080/update/${id}`, book);
          alert("Updated");
          getAll();
        }}
      >
        <input
          value={author}
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={genre}
          type="text"
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </li>
  );
};

const EditBooks = () => {
  const { books } = useContext(Context);
  return (
    <div className="booksList formContent">
      <ul>
        {books.map((elem, index) => {
          return <BooksElem book={elem} id={index} />;
        })}
      </ul>
    </div>
  );
};

export default EditBooks;
