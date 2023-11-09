package com.example.be.repository;

import com.example.be.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRoleRepository extends JpaRepository<UserRole,Long> {
}
