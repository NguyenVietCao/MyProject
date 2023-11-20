package com.example.demobe.service;

import com.example.demobe.model.ProductType;
import com.example.demobe.repository.IProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService{
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductType> findAll() {
        return productTypeRepository.findAll();
    }

    @Override
    public ProductType findByIdType(Integer idType) {
        return productTypeRepository.findById(idType).get();
    }
}
