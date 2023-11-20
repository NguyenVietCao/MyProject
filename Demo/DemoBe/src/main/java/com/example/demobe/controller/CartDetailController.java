package com.example.demobe.controller;

import com.example.demobe.model.CartDetail;
import com.example.demobe.model.Products;
import com.example.demobe.model.Users;
import com.example.demobe.service.ICartDetailService;
import com.example.demobe.service.IProductsService;
import com.example.demobe.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin/cart")
public class CartDetailController {
    @Autowired
    private ICartDetailService cartDetailService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IProductsService productsService;


    @PostMapping("/cartDetail/{id}")
    public ResponseEntity<CartDetail> addCartDetail(@PathVariable("id") Integer id,
                                                    @RequestParam("userName") String userName) {
        System.err.println(userName);
        List<CartDetail> cartDetailList = cartDetailService.getList();

        CartDetail cartDetail = new CartDetail();


        Products products = productsService.findProductById(id);

        Users users = userService.findByUserName(userName);

        cartDetail.setUsers(users);
        cartDetail.setProducts(products);


        if (cartDetailList.contains(cartDetail)) {
            for (CartDetail c : cartDetailList) {
                if (c.equals(cartDetail)) {
                    cartDetail = c;
                    cartDetail.setQuantity(cartDetail.getQuantity() + 1);
                    break;
                }

            }

            cartDetailService.addCartDetail(cartDetail);
        } else {
            cartDetail.setQuantity(1);
            products.setId(id);
            cartDetail.setProducts(products);
            cartDetail.setUsers(users);
            cartDetailService.addCartDetail(cartDetail);

        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<List<CartDetail>> showListCartDetail(@PathVariable("idUser") Integer idUser) {
        List<CartDetail> cartDetailList = cartDetailService.getListCartByIdUser(idUser);
        return new ResponseEntity<>(cartDetailList, HttpStatus.OK);
    }
}