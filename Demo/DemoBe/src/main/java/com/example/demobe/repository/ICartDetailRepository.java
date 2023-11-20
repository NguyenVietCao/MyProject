package com.example.demobe.repository;

import com.example.demobe.model.CartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICartDetailRepository extends JpaRepository<CartDetail,Integer> {

}
