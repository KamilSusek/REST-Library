import React, { useContext } from "react";
import axios from "axios";
import ContextProvider, { Context } from "./ContextProvider";

const DeleteBooks = () => {
  const { books, getAll } = useContext(Context);

  return (
    <div className="booksList">
      <ul>
        {books.map((elem, index) => {
          return (
            <li style={{ marginTop: "1%" }}>
              <fieldset>
                Author: {elem.author}
                <br />
                Title: {elem.title}
                <br />
                Genre: {elem.genre}
                <br />
                <button
                  className="removeButton"
                  onClick={(event) => {
                    event.preventDefault();
                    axios.delete(`http://localhost:8080/delete/${index}`);
                    getAll();
                  }}
                >
                  remove
                </button>
              </fieldset>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeleteBooks;
