package com.example.be.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "customer")
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String customerName;
    private String customerAddress;
    private String customerPhone;
    private LocalDate customerBirthDay;
    private String customerEmail;
    private Boolean flag_deleted;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    public Customers() {
    }

    public Customers(int id, String customerName, String customerAddress, String customerPhone, LocalDate customerBirthDay, String customerEmail, Boolean flag_deleted, Users users) {
        this.id = id;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
        this.customerBirthDay = customerBirthDay;
        this.customerEmail = customerEmail;
        this.flag_deleted = flag_deleted;
        this.users = users;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public LocalDate getCustomerBirthDay() {
        return customerBirthDay;
    }

    public void setCustomerBirthDay(LocalDate customerBirthDay) {
        this.customerBirthDay = customerBirthDay;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public Boolean getFlag_deleted() {
        return flag_deleted;
    }

    public void setFlag_deleted(Boolean flag_deleted) {
        this.flag_deleted = flag_deleted;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
