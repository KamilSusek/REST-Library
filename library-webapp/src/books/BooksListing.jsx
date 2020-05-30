import React, { useContext } from "react";
import ContextProvider, { Context } from "./ContextProvider";
import "../styles/style.css";

const BooksListing = () => {
  const { books } = useContext(Context);

  return (
    <div>
      <ul>
        {books.map((elem, index) => {
          return (
            <li key={index}>
              {elem.author} {elem.title} {elem.genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksListing;
