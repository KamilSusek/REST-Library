import React, { useContext } from 'react';
import axios from 'axios';
import ContextProvider, { Context } from './ContextProvider';

const DeleteBooks = () => {

    const { books } = useContext(Context)

    return (
        <div>
            {books.map((elem, index) => {
                return (
                    <li>
                        {elem.author} {elem.title} {elem.genre}
                        <button onClick={(event) => {
                            event.preventDefault();
                            axios.delete(`http://localhost:8080/delete/${index}`);
                        }}></button>
                    </li>)
            })}
        </div>)
}

export default DeleteBooks;