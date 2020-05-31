import React, { useContext } from "react";
import ContextProvider, { Context } from "./ContextProvider";
import "../styles/style.css";

const BooksListing = () => {
  const { books } = useContext(Context);

  return (
    <div className="booksList">
      <ul>
        {books.map((elem, index) => {
          return (
            <li style={{ marginTop: "1%" }} key={index}>
              <fieldset>
                Author: {elem.author}
                <br />
                Title:{"  "}
                {elem.title}
                <br />
                Genre:{"  "}
                {elem.genre}
                <br />
              </fieldset>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksListing;
