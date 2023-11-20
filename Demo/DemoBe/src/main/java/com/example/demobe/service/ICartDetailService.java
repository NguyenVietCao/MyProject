package com.example.demobe.service;

import com.example.demobe.model.CartDetail;
import com.example.demobe.model.Products;
import com.example.demobe.model.Users;

import java.util.List;

public interface ICartDetailService {
    void addCartDetail(CartDetail cartDetail);
    List<CartDetail>getList();
    CartDetail getCartDetailBy(Products products, Users users);
    List<CartDetail>getListCartByIdUser(Integer idUser);
}
