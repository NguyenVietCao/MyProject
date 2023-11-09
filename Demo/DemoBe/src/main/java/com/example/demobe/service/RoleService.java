package com.example.demobe.service;

import com.example.demobe.model.ERole;
import com.example.demobe.model.Roles;
import com.example.demobe.repository.IRolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class RoleService implements IRoleService{
    @Autowired
    private IRolesRepository rolesRepository;
    @Override
    public Optional<Roles> findByRoleName(ERole roleName) {
        return rolesRepository.findByRoleName(roleName);
    }
}
