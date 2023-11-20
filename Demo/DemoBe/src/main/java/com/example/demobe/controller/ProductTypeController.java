package com.example.demobe.controller;

import com.example.demobe.model.ProductType;
import com.example.demobe.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/admin/business/type")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;
    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<ProductType>>showAll(){
       return new ResponseEntity<>(productTypeService.findAll(), HttpStatus.OK);
    }

}
