package com.example.demobe.controller;

import com.example.demobe.model.Products;
import com.example.demobe.service.IProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductsController {
    @Autowired
    private IProductsService productsService;
    public ResponseEntity<List<Products>>showListProducts(){
        productsService.getListProducts();
        return ResponseEntity.
    }

}
