package com.example.demobe.dto;

import com.example.demobe.model.ProductType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


import java.time.LocalDate;

public class ProductDto implements Validator {
    private int idProduct;
    private String productName;
    private Double price;
    private String capacity;
    private String description;
    private String unit;
    private LocalDate expiry;
    private String images;
    private ProductType productType;

    public ProductDto() {
    }

    public ProductDto(int idProduct, String productName, Double price, String capacity, String description, String unit, LocalDate expiry, String images, ProductType productType) {
        this.idProduct = idProduct;
        this.productName = productName;
        this.price = price;
        this.capacity = capacity;
        this.description = description;
        this.unit = unit;
        this.expiry = expiry;
        this.images = images;
        this.productType = productType;
    }

    public int getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(int idProduct) {
        this.idProduct = idProduct;
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

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
