package com.example.demobe.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Users")
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @Column(name = "UserName",unique = true,nullable = false)
    private String userName;
    @Column(name = "Password",nullable = false)
    private String password;
    @Column(name = "Created")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate created;
    @Column(name = "Email",nullable = false,unique = true)
    private String email;
    @Column(name = "Phone")
    private String phone;
    @Column(name = "UserStatus")
    private Boolean userStatus;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "User_role",joinColumns = @JoinColumn(name = "UserId"),
            inverseJoinColumns = @JoinColumn(name = "RoleId"))
    private Set<Roles>listRoles = new HashSet<>();
}
