import React, { createContext } from "react";
import "../styles/style.css";
import BooksListing from "./BooksListing.jsx";
import AddBookForm from './AddBookForm.jsx'
import EditBooks from './EditBooks';
import DeleteBooks from './DeleteBooks'
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
            <Route path="/add-books"><AddBookForm /></Route>
            <Route path="/update-books"><EditBooks /></Route>
            <Route path="/delete-books"><DeleteBooks /></Route>
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
