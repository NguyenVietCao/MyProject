package com.example.demobe.controller;

import com.example.demobe.dto.IProductDto;
import com.example.demobe.dto.ProductDto;
import com.example.demobe.model.Products;
import com.example.demobe.repository.IProductsRepository;
import com.example.demobe.service.IProductsService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin/business/products")
public class ProductsController {
    @Autowired
    private IProductsService productsService;


   @GetMapping("/{idProduct}")
    @ResponseBody
    public ResponseEntity<ProductDto>showProductById(@PathVariable("idProduct")Integer idProduct){
       Products products = productsService.findProductById(idProduct);
       ProductDto productDto = new ProductDto();
       BeanUtils.copyProperties(products,productDto);
      if(products==null){
          return new ResponseEntity<>(productDto,HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(productDto,HttpStatus.OK);
   }

@GetMapping("/list")
    public ResponseEntity<Page<IProductDto>>showAllProduct(
            @RequestParam(value = "value",required = false,defaultValue = "")String value,
            @RequestParam(value = "search",required = false,defaultValue = "name")String search,
            @RequestParam(value = "sort",required = false,defaultValue = "")String sort,
            @RequestParam(value = "otherSort",required = false,defaultValue = "asc")String otherSort,
            @RequestParam(value = "page",required = false,defaultValue = "0")Integer page,
            @RequestParam(value = "size",required = false,defaultValue = "")Integer size
){
Page<IProductDto>productDtoPage;
    Pageable pageable;
    Sort sort1;
    switch (sort){
        case "name":
            sort1 = Sort.by("name");
            break;
        case "price":
            sort1 = Sort.by("price");
            break;
        case "expiry":
            sort1 = Sort.by("expiry");
            break;
        default:
            sort1 = Sort.by("id");
            break;
    }
    if (otherSort.equals("asc")){
        sort1 = sort1.ascending();
    }else {
        sort1 = sort1.descending();
    }
    pageable = PageRequest.of(page,size,sort1);
    switch (search){
        case "name":
            productDtoPage = productsService.getAllByName(pageable,value);
            break;
        case "price":
            if (Objects.equals(value,"")){
                productDtoPage = productsService.getAllByName(pageable,"");
                break;
            }
            productDtoPage = productsService.getAllByPrice(pageable,value);
            break;
        case "expiry":
            if (Objects.equals(value,"")){
                productDtoPage = productsService.getAllByName(pageable,"");
                break;
            }
            productDtoPage = productsService.getAllByExpiry(pageable,value);
            break;
        default:
            productDtoPage = productsService.getAllByName(pageable,"");
            break;
    }
    if(productDtoPage.getContent().isEmpty()){
        return new ResponseEntity<>(productDtoPage,HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(productDtoPage,HttpStatus.OK);
}
@GetMapping("/listProduct")
    public ResponseEntity<List<Products>>showAllProductList(){
       List<Products>productDtoList = productsService.getAllProductList();


       if (productDtoList.isEmpty()){
           return new ResponseEntity<> (productDtoList,HttpStatus.NO_CONTENT);
       }
       return new ResponseEntity<>(productDtoList,HttpStatus.OK);
}


}
