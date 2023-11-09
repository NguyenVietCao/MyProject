package com.example.demobe.repository;

import com.example.demobe.model.ERole;
import com.example.demobe.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface IRolesRepository extends JpaRepository<Roles,Integer> {
Optional<Roles>findByRoleName(ERole roleName);
}
