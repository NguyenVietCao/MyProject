package com.example.be.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee")
public class Employees {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String employeeName;
    private String employeeAddress;
    private LocalDate employeeBirthDay;
    private String employeeEmail;
    private String employeePhone;
    private String employeeCode;
    private Boolean flag_deleted;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    public Employees() {
    }

    public Employees(int id, String employeeName, String employeeAddress, LocalDate employeeBirthDay, String employeeEmail, String employeePhone, String employeeCode, Boolean flag_deleted, Users users) {
        this.id = id;
        this.employeeName = employeeName;
        this.employeeAddress = employeeAddress;
        this.employeeBirthDay = employeeBirthDay;
        this.employeeEmail = employeeEmail;
        this.employeePhone = employeePhone;
        this.employeeCode = employeeCode;
        this.flag_deleted = flag_deleted;
        this.users = users;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeAddress() {
        return employeeAddress;
    }

    public void setEmployeeAddress(String employeeAddress) {
        this.employeeAddress = employeeAddress;
    }

    public LocalDate getEmployeeBirthDay() {
        return employeeBirthDay;
    }

    public void setEmployeeBirthDay(LocalDate employeeBirthDay) {
        this.employeeBirthDay = employeeBirthDay;
    }

    public String getEmployeeEmail() {
        return employeeEmail;
    }

    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public String getEmployeePhone() {
        return employeePhone;
    }

    public void setEmployeePhone(String employeePhone) {
        this.employeePhone = employeePhone;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
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
