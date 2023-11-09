package com.example.be.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String userName;
    private String password;
    private Boolean flag_deleted;
    private Boolean flagOnline;

    public Users() {

    }

    public Users(int id, String userName, String password, Boolean flag_deleted, Boolean flagOnline) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.flag_deleted = flag_deleted;
        this.flagOnline = flagOnline;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getFlag_deleted() {
        return flag_deleted;
    }

    public void setFlag_deleted(Boolean flag_deleted) {
        this.flag_deleted = flag_deleted;
    }

    public Boolean getFlagOnline() {
        return flagOnline;
    }

    public void setFlagOnline(Boolean flagOnline) {
        this.flagOnline = flagOnline;
    }
}
