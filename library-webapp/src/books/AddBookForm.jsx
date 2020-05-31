import React, { useState, useContext } from "react";
import ContextProvider, { Context } from "./ContextProvider";
import axios from "axios";

/*
TODO: Add error messages
*/

const AddBookForm = () => {
  const { getAll } = useContext(Context);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <div className="formContent">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            author &&
            !author.startsWith(" ") &&
            title &&
            !title.startsWith(" ") &&
            genre &&
            !genre.startsWith(" ")
          ) {
            let book = {
              author: author,
              title: title,
              genre: genre,
            };
            axios.post(`http://localhost:8080/add`, book);
            alert("ok");
            setAuthor("");
            setTitle("");
            setGenre("");
            getAll();
          }
        }}
      >
        <label>Author:</label>
        <br />
        <input
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          value={author}
        />
        <br />
        <label>Title:</label>
        <br />
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <br />
        <label>Genre:</label>
        <br />
        <input
          type="text"
          onChange={(event) => {
            setGenre(event.target.value);
          }}
          value={genre}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBookForm;
