package com.example.demobe.service;

import com.example.demobe.model.CartDetail;
import com.example.demobe.model.Products;
import com.example.demobe.model.Users;
import com.example.demobe.repository.ICartDetailRepository;
import com.example.demobe.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartDetailService implements ICartDetailService {
    @Autowired
    private IUsersRepository usersRepository;
    @Autowired
    private ICartDetailRepository cartDetailRepository;

    @Override
    public void addCartDetail(CartDetail cartDetail) {
        cartDetailRepository.save(cartDetail);
    }

    @Override
    public List<CartDetail> getList() {
        return cartDetailRepository.findAll();
    }

    @Override
    public CartDetail getCartDetailBy(Products products, Users users) {
        return null;
    }

    @Override
    public List<CartDetail> getListCartByIdUser(Integer id) {
        List<CartDetail> cartDetailList = cartDetailRepository.findAll();
        Users users = usersRepository.findUsersByUserId(id);
        List<CartDetail> cartDetailList1 = new ArrayList<>();
        for (CartDetail c : cartDetailList) {
            if (users == c.getUsers()) {
                cartDetailList1.add(c);
            }
        }
        return cartDetailList1;
    }

}
