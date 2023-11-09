package com.example.be.service;


import com.example.be.model.Users;

import com.sun.xml.internal.messaging.saaj.packaging.mime.MessagingException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.io.UnsupportedEncodingException;
import java.util.Optional;


public interface IAppUserService extends UserDetailsService {

    Boolean existsByUsername(String userName);

    Boolean createNewAppUser(Users appUser, String role);

    Boolean logout(String userName);
    Long findAppUserIdByUserName(String userName);

    boolean existsById(Long id);

    void generateOneTimePassword(Users appUser, PasswordEncoder passwordEncoder, String subject, String title) throws MessagingException, UnsupportedEncodingException;

    void sendOTPEmail(Users appUser, String OTP, String subject, String title) throws MessagingException, UnsupportedEncodingException;

    Optional<Users> findByUsername(String name);

    Users findAppUserById(Long id);
    void updateInfoUser(Users appUser);

    void updatePass(Users appUser);
}
