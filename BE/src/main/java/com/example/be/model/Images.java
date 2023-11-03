package com.example.be.model;

import javax.persistence.*;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imagePath;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
