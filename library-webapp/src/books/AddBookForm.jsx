import React, { useState } from 'react'
import axios from 'axios'
const AddBookForm = () => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    return (<div>
        <form onSubmit={(event) => {
            event.preventDefault();
            if (author && !author.startsWith(' ')
                && title && !title.startsWith(' ')
                && genre && !genre.startsWith(' ')) {
                let book = {
                    author: author,
                    title: title,
                    genre: genre
                }
                axios.post(`http://localhost:8080/add`, book);
                alert("ok");
                setAuthor('');
                setTitle('');
                setGenre('');
            }
        }}>
            <label>Author:
                <input type='text' onChange={(event) => {
                    setAuthor(event.target.value);
                }} value={author} />
            </label> <br />
            <label>Title:
                <input type='text' onChange={(event) => {
                    setTitle(event.target.value);
                }} value={title} />
            </label> <br />
            <label>Genre:
                <input type='text' onChange={(event) => {
                    setGenre(event.target.value);
                }} value={genre} />
            </label><br />
            <input type='submit' />
        </form>
    </div >)
}

export default AddBookForm;