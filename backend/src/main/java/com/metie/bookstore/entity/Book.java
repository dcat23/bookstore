package com.metie.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
    private String title;
    private  String isbn;
    private double cost;

//   @ManyToOne
//   @JsonIgnore
//    public Author authors;

    public Book() {

    }

    public Book(String title, String isbn,double cost){
        this.title=title;
        this.isbn=isbn;
        this.cost=cost;

}
//    public Book(String title, String isbn,double cost, Author author){
//        this.title=title;
//        this.isbn=isbn;
//        this.cost=cost;
//
//    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public Author getAuthors() {
//        return authors;
//    }
//
//    public void setAuthors(Author authors) {
//        this.authors = authors;
//    }
}
