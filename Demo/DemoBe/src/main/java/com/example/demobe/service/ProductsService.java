package com.example.demobe.service;

import com.example.demobe.dto.IProductDto;
import com.example.demobe.model.Products;
import com.example.demobe.repository.IProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductsService implements IProductsService{
    @Autowired
    private IProductsRepository productsRepository;


    @Override
    public List<Products> getAllProductList() {
        return productsRepository.findAll();
    }

    @Override
    public Products findProductById(Integer idProduct) {
        return productsRepository.findById(idProduct).get();
    }

    @Override
    public void createProduct(Products products) {

    }

    @Override
    public void editProduct(Products products) {

    }

    @Override
    public Page<IProductDto> getAllByName(Pageable pageable, String name) {
        return productsRepository.findAllByName(pageable,'%' + name + '%');
    }

    @Override
    public Page<IProductDto> getAllByPrice(Pageable pageable, String price) {
        switch (price){
            case "smaller 500":
                return productsRepository.findAllByPriceMin(pageable,500000.0);
            case "500 to 1m":
                return productsRepository.findAllByPrice(pageable,50000.0,1000000.0);
            case "better 1m":
                return productsRepository.findAllByPriceMax(pageable,1000000.0);
        }
        return productsRepository.findAllByName(pageable,"%%");
    }

    @Override
    public Page<IProductDto> getAllByExpiry(Pageable pageable, String expiry) {
        return null;
    }

    @Override
    public Page<IProductDto> getAllByType(Pageable pageable, String idType) {
        return null;
    }
}
