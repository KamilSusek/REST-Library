import React, { createContext } from "react";
import "../styles/style.css";
import BooksListing from "./BooksListing.jsx";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const PageContent = () => {
  return (
    <div>
      <Router>
        <div>
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <NavLink to="/get-books">BOOKS</NavLink>
                </li>
                <li>
                  <NavLink to="/add-books">ADD BOOKS</NavLink>
                </li>
                <li>
                  <NavLink to="/update-books">UPDATE</NavLink>
                </li>
                <li>
                  <NavLink to="/delete-books">DELETE</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Route path="/get-books">
              <BooksListing />
            </Route>
            <Route path="/add-books">b</Route>
            <Route path="/update-books">c</Route>
            <Route path="/delete-books">d</Route>
          </div>
        </div>
      </Router>
      <div className="footerSection">
        <footer>FOOTER</footer>
      </div>
    </div>
  );
};

export default PageContent;
