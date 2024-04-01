package com.metie.bookstore.service;

import com.metie.bookstore.entity.Book;

import java.util.List;

public interface BookService {
    Book createBook(Book book);
    List<Book> getAllBook();
    Book updateBook(Long id,Book book);
    void deleteBook(Long id);

    List<Book> getAllBooks();

    Book updateBook(String title, Book book);

    void deleteBook(String title);
}
