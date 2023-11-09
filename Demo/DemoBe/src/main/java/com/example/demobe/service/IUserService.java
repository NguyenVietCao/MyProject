package com.example.demobe.service;

import com.example.demobe.model.Users;

public interface IUserService {
    Users findByUserName(String userName);
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
    Users saveOrUpdate(Users users);
}
