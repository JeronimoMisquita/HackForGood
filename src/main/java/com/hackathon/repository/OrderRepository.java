package com.hackathon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.bean.CanOrder;

@Repository
public interface OrderRepository extends JpaRepository<CanOrder, Long> {

	CanOrder findByMobile(Long mobile);

	CanOrder findCansByMobile(Long mobile);

}
