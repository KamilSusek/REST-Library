package com.proj.librarymanager.librarymanager.controller;

import com.proj.librarymanager.librarymanager.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookController {

    private List<Book> books;

    {
        books = new ArrayList<>();
        books.add(new Book(1L, "Lord of the Rings. Return of the King.", "J.R.R Tolkien", "Fantasy"));
    }

    @GetMapping("/get-all")
    public List<Book> getAllBooks() {
        return books;
    }

    @PostMapping("/add")
    public void addBook(@RequestBody Book book) {
        books.add(book);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBookById(@PathVariable long id) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getId() == id) {
                books.remove(i);
            }
        }
    }

    @PutMapping("/update/{id}")
    public void updateBookByTitle(@PathVariable long id, @RequestBody Book book) {
        for (int i = 0; i < books.size(); i++) {
            if (books.get(i).getId() == id) {
                books.get(i).setTitle(book.getTitle());
                books.get(i).setAuthor(book.getAuthor());
                books.get(i).setGenre(book.getGenre());
            }
        }
    }
}
