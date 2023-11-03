package com.example.be.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String orderCode;
    private LocalDate oderDate;
    private Boolean flag_deleted;
    private String note;

    public Orders() {
    }

    public Orders(int id, String orderCode, LocalDate oderDate, Boolean flag_deleted, String note) {
        this.id = id;
        this.orderCode = orderCode;
        this.oderDate = oderDate;
        this.flag_deleted = flag_deleted;
        this.note = note;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public LocalDate getOderDate() {
        return oderDate;
    }

    public void setOderDate(LocalDate oderDate) {
        this.oderDate = oderDate;
    }

    public Boolean getFlag_deleted() {
        return flag_deleted;
    }

    public void setFlag_deleted(Boolean flag_deleted) {
        this.flag_deleted = flag_deleted;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
