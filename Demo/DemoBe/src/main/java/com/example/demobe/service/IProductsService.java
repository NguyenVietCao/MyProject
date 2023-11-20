package com.example.demobe.service;

import com.example.demobe.dto.IProductDto;
import com.example.demobe.dto.ProductDto;
import com.example.demobe.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductsService {
    List<Products> getAllProductList();

    Products findProductById(Integer idProduct);

    void createProduct(Products products);

    void editProduct(Products products);


    Page<IProductDto> getAllByName(Pageable pageable, String name);


    Page<IProductDto> getAllByPrice(Pageable pageable, String price);


    Page<IProductDto> getAllByExpiry(Pageable pageable, String expiry);


    Page<IProductDto> getAllByType(Pageable pageable, String idType);
}
