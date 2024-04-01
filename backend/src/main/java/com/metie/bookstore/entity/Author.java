//package com.metie.bookstore.entity;
//
//import jakarta.persistence.*;
//
//import java.util.List;
//
//@Entity
//public class Author {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    private String authorName;
//    private String location;
//
//    @OneToMany
//    private List<Book> book;
//
//    public Author () {
//    }
//
//    public Author(String authorName, String location) {
//        this.authorName = authorName;
//        this.location = location;
//
//    }
//
//    public String getAuthorName() {
//        return authorName;
//    }
//
//    public void setAuthorName(String authorName) {
//        this.authorName = authorName;
//    }
//
//    public String getLocation() {
//        return location;
//    }
//
//    public void setLocation(String location) {
//        this.location = location;
//    }
//
//}
