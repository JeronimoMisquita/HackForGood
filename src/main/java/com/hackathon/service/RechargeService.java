package com.hackathon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hackathon.bean.CanOrder;
import com.hackathon.bean.Feedback;
import com.hackathon.bean.FeedbackAverage;
import com.hackathon.bean.RechargeOrder;
import com.hackathon.bean.User;
import com.hackathon.repository.RechargeRepository;

@Component
public class RechargeService {

	@Autowired
	RechargeRepository rechargeRepository;

	public List<RechargeOrder> getPendingRecharge(Long approved) {
		return rechargeRepository.findAllByApproved(approved);
	}

	public List<RechargeOrder> getApprovedRecharge(Long approved) {
		return rechargeRepository.findAllByApproved(approved);
	}

	public void saveAsApproved(Long mobile) {
		RechargeOrder rechargeOrder = rechargeRepository.findByMobile(mobile);
		rechargeOrder.setApproved(1L);
		rechargeRepository.save(rechargeOrder);
	}

}
