package com.example.demobe.service;

import com.example.demobe.model.Products;
import com.example.demobe.repository.IProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductsService implements IProductsService{
    @Autowired
    private IProductsRepository productsRepository;
    @Override
    public List<Products> getListProducts() {
        return productsRepository.findProducts();
    }
}
