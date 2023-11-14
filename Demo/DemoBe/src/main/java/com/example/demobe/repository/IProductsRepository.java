package com.example.demobe.repository;

import com.example.demobe.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductsRepository extends JpaRepository<Products,Integer> {
    @Query(nativeQuery = true,value = "")
    List<Products>findProducts();
}
