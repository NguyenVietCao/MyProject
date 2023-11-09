package com.example.be.service;

import com.example.be.dto.JwtResponseUserDetails;
import com.example.be.model.UserRole;
import com.example.be.model.Users;
import com.example.be.repository.IAppUserRepository;
import com.example.be.repository.IUserRoleRepository;
import com.sun.xml.internal.messaging.saaj.packaging.mime.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AppUserService  implements IAppUserService{
    @Autowired
    private  IAppUserRepository appUserRepository;
    @Autowired
    private IUserRoleRepository userRoleRepository;
    @Override
    public Boolean existsByUsername(String userName) {
        return null;
    }

    @Override
    public Boolean createNewAppUser(Users appUser, String role) {
        return null;
    }

    @Override
    public Boolean logout(String userName) {
        return null;
    }

    @Override
    public Long findAppUserIdByUserName(String userName) {
        return null;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public void generateOneTimePassword(Users appUser, PasswordEncoder passwordEncoder, String subject, String title) throws MessagingException, UnsupportedEncodingException {

    }

    @Override
    public void sendOTPEmail(Users appUser, String OTP, String subject, String title) throws MessagingException, UnsupportedEncodingException {

    }

    @Override
    public Optional<Users> findByUsername(String name) {
        return Optional.empty();
    }

    @Override
    public Users findAppUserById(Long id) {
        return null;
    }

    @Override
    public void updateInfoUser(Users appUser) {

    }

    @Override
    public void updatePass(Users appUser) {


    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users appUser = appUserRepository.findAppUserByName(username);
        if (appUser == null) {
            throw new UsernameNotFoundException("User name or password is wrong");
        }

        List<GrantedAuthority> grantList = new ArrayList<>();
        List<UserRole>userRoles = userRoleRepository.findAll();
        for (UserRole userRole :userRoles ) {
            grantList.add(new SimpleGrantedAuthority(userRole.getRoles().getRoleName()));
        }
        UserDetails userDetails = new JwtResponseUserDetails(
                appUser.getUserName(),
                appUser.getPassword(),
                appUser.getFlagOnline(),
                grantList);
        appUserRepository.updateAppUserIsOnline(appUser);
        return userDetails;
    }
}
