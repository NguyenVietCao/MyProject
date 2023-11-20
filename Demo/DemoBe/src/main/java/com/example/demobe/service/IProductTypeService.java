package com.example.demobe.service;

import com.example.demobe.model.ProductType;

import java.util.List;

public interface IProductTypeService {
    List<ProductType> findAll();
    ProductType findByIdType(Integer idType);
}
