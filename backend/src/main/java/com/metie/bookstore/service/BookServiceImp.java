package com.metie.bookstore.service;

import com.metie.bookstore.entity.Book;
import com.metie.bookstore.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImp implements BookService {
    private final BookRepository bookRepository;

    public BookServiceImp(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book createBook(Book book) {
        bookRepository.save(book);
        return book;
    }
    @Override
    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }

    @Override
    public Book updateBook(Long id, Book book) {
        Optional<Book> optionalBook = bookRepository.findById(String.valueOf(id));
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            // Update fields of existingBook with corresponding fields of book parameter
            // Example: existingBook.setTitle(book.getTitle());
            // Update other fields similarly...
            return bookRepository.save(existingBook);
        } else {
            throw new EntityNotFoundException("Book not found with id: " + id);
        }
    }

    @Override
    public void deleteBook(Long id) {

    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    @Override
    public Book updateBook(String title, Book book) {
        Optional<Book> optionalBook = bookRepository.findByTitle(title);
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            // Update fields of existingBook with corresponding fields of book parameter
            // Example: existingBook.setIsbn(book.getIsbn());
            // Update other fields similarly...
            return bookRepository.save(existingBook);
        } else {
            throw new EntityNotFoundException("Book not found with title: " + title);
        }
    }

    @Override
    public void deleteBook(String title) {
        Optional<Book> optionalBook = bookRepository.findByTitle(title);
        if (optionalBook.isPresent()) {
            bookRepository.delete(optionalBook.get());
        } else {
            throw new EntityNotFoundException("Book not found with title: " + title);
        }
    }
}