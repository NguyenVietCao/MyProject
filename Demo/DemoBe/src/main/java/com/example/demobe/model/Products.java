package com.example.demobe.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String productName;
    private Double price;
    private String capacity;
    private String description;
    private String unit;
    private LocalDate expiry;
    private String images;
    private String quantity;
    @ManyToOne
    @JoinColumn(name = "product_type_id")
    private ProductType productType;

    public Products() {
    }

    public Products(int id, String productName, Double price, String capacity, String description, String unit, LocalDate expiry, String images, String quantity, ProductType productType) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.capacity = capacity;
        this.description = description;
        this.unit = unit;
        this.expiry = expiry;
        this.images = images;
        this.quantity = quantity;
        this.productType = productType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public LocalDate getExpiry() {
        return expiry;
    }

    public void setExpiry(LocalDate expiry) {
        this.expiry = expiry;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
