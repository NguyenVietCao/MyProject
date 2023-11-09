package com.example.be.repository;

import com.example.be.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface IAppUserRepository extends JpaRepository<Users,Long> {
    Users findAppUserByName(String username);



    @Modifying
    @Transactional
    @Query(value = "update app_user set flag_online = 1 where id = :#{#appUser.id} ",nativeQuery = true)
    Integer updateAppUserIsOnline(Users appUser);
}
