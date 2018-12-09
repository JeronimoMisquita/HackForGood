package com.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.bean.RechargeOrder;

@Repository
public interface RechargeRepository extends JpaRepository<RechargeOrder, Long> {

	RechargeOrder findByMobile(Long mobile);

	RechargeOrder findBalanceByMobile(Long mobile);

	List<RechargeOrder> findAllByApproved(Long approved);

}
