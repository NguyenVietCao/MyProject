package com.example.demobe.service;

import com.example.demobe.model.ERole;
import com.example.demobe.model.Roles;

import java.util.Optional;

public interface IRoleService {
    Optional<Roles> findByRoleName(ERole roleName);
}
