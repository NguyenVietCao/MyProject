package com.example.demobe.repository;

import com.example.demobe.dto.IProductDto;
import com.example.demobe.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductsRepository extends JpaRepository<Products,Integer> {
@Query(nativeQuery = true,value = "SELECT p.id as id,\n" +
        "p.capacity as capacity,\n" +
        "p.description as description,\n" +
        "p.expiry as expiry,\n" +
        "p.images as images,\n" +
        "p.price as price,\n" +
        "p.product_name as name,\n" +
        "p.unit as unit,\n" +
        "p.product_type_id as idType\n" +
        " FROM products as p\n" +
        " join product_type on p.product_type_id = product_type.id\n" +
        " where p.product_name like :name")
    Page<IProductDto>findAllByName(Pageable pageable,@Param("name")String name);


    @Query(nativeQuery = true,value = "SELECT p.id as id,\n" +
            "p.capacity as capacity,\n" +
            "p.description as description,\n" +
            "p.expiry as expiry,\n" +
            "p.images as images,\n" +
            "p.price as price,\n" +
            "p.product_name as name,\n" +
            "p.unit as unit,\n" +
            "p.product_type_id as idType\n" +
            " FROM products as p\n" +
            " join product_type on p.product_type_id = product_type.id\n" +
            " where p.price between :min and :max ")
    Page<IProductDto>findAllByPrice(Pageable pageable,@Param("min")Double min,@Param("max")Double max);


    @Query(nativeQuery = true,value = "SELECT p.id as id,\n" +
            "p.capacity as capacity,\n" +
            "p.description as description,\n" +
            "p.expiry as expiry,\n" +
            "p.images as images,\n" +
            "p.price as price,\n" +
            "p.product_name as name,\n" +
            "p.unit as unit,\n" +
            "p.product_type_id as idType\n" +
            " FROM products as p\n" +
            " join product_type on p.product_type_id = product_type.id\n" +
            " where p.price <= :min  ")
    Page<IProductDto>findAllByPriceMin(Pageable pageable,@Param("min")Double min);

    @Query(nativeQuery = true,value = "SELECT p.id as id,\n" +
            "p.capacity as capacity,\n" +
            "p.description as description,\n" +
            "p.expiry as expiry,\n" +
            "p.images as images,\n" +
            "p.price as price,\n" +
            "p.product_name as name,\n" +
            "p.unit as unit,\n" +
            "p.product_type_id as idType\n" +
            " FROM products as p\n" +
            " join product_type on p.product_type_id = product_type.id\n" +
            " where p.price <= :max  ")
    Page<IProductDto>findAllByPriceMax(Pageable pageable,@Param("max")Double max);
}
