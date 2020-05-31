import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import PageContent from "./PageContent.js";

export const Context = createContext();

const ContextProvider = () => {
  const [books, setBooks] = useState([]);

  async function getAll() {
    axios({
      url: `http://localhost:8080/get-all`,
    }).then((response) => setBooks((books) => [...response.data]));
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Context.Provider value={{ books, getAll }}>
      <PageContent></PageContent>
    </Context.Provider>
  );
};

export default ContextProvider;
