package com.example.be.model;

import javax.persistence.*;

@Entity

public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Integer numberStar;
    private String comment;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customers;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Rating() {
    }

    public Rating(int id, Integer numberStar, String comment, Customers customers, Product product) {
        this.id = id;
        this.numberStar = numberStar;
        this.comment = comment;
        this.customers = customers;
        this.product = product;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getNumberStar() {
        return numberStar;
    }

    public void setNumberStar(Integer numberStar) {
        this.numberStar = numberStar;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
