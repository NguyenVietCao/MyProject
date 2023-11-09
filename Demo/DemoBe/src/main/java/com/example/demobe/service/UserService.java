package com.example.demobe.service;

import com.example.demobe.model.Users;
import com.example.demobe.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUsersRepository usersRepository;
    @Override
    public Users findByUserName(String userName) {
        return usersRepository.findByUserName(userName);
    }

    @Override
    public boolean existsByUserName(String userName) {
        return usersRepository.existsByUserName(userName);
    }

    @Override
    public boolean existsByEmail(String email) {
        return usersRepository.existsByEmail(email);
    }

    @Override
    public Users saveOrUpdate(Users users) {
        return usersRepository.save(users);
    }
}
