import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import PageContent from "./PageContent.js";

export const Context = createContext();

const ContextProvider = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/get-all`,
    }).then((response) => setBooks((books) => [...response.data]));
  }, []);

  return (
    <Context.Provider value={{ books }}>
      <PageContent></PageContent>
    </Context.Provider>
  );
};

export default ContextProvider;
