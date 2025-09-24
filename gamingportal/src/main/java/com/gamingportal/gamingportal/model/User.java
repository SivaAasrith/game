package com.gamingportal.gamingportal.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private int age;
    private String contact;
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private int tournamentsPlayed = 0;
    private int wins = 0;
    private int points = 0;

    public User() {}

    public User(String firstName, String lastName, int age, String contact, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.contact = contact;
        this.email = email;
        this.password = password;
    }

    // ✅ Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public int getTournamentsPlayed() { return tournamentsPlayed; }
    public void setTournamentsPlayed(int tournamentsPlayed) { this.tournamentsPlayed = tournamentsPlayed; }

    public int getWins() { return wins; }
    public void setWins(int wins) { this.wins = wins; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
}
