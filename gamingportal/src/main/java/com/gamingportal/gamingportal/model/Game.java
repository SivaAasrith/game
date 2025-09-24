package com.gamingportal.gamingportal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String genre;
    @Column(length = 1000)
    private String description;
    private String thumbnailUrl;
    private double rating; // 0-5
    private double price;  // optional store price

    public Game() {}

    public Game(String title, String genre, String description, String thumbnailUrl, double rating, double price) {
        this.title = title;
        this.genre = genre;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.rating = rating;
        this.price = price;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getThumbnailUrl() { return thumbnailUrl; }
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }
    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}


