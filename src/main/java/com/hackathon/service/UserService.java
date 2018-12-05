package com.hackathon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hackathon.bean.CanOrder;
import com.hackathon.bean.Feedback;
import com.hackathon.bean.FeedbackAverage;
import com.hackathon.bean.User;
import com.hackathon.repository.FeedbackRepository;
import com.hackathon.repository.OrderRepository;
import com.hackathon.repository.UserRepository;

@Component
public class UserService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	FeedbackRepository feedbackRepository;

	@Autowired
	OrderRepository orderRepository;

	@Autowired
	FeedbackAverage feedbackAverage;

	public User getUserProfile(Long mobile) {
		return userRepository.findByMobile(mobile);
	}

	public User getUser(Long mobile) {
		return userRepository.findByMobile(mobile);
	}

	public User getUserBalance(Long mobile) {
		return userRepository.findBalanceByMobile(mobile);
	}

	public void updateUserBalance(Long mobile, Long balance) {
		userRepository.updateUserBalance(mobile, balance);
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public Feedback saveFeedback(Feedback feedback) {
		return feedbackRepository.save(feedback);
	}

	public Feedback getUserFeedback(Long mobile) {

		return feedbackRepository.findByMobile(mobile);
	}

	public List<Feedback> getUserFeedbacks() {
		return feedbackRepository.findAll();
	}

	public CanOrder saveOrder(CanOrder order) {
		return orderRepository.save(order);

	}

	public List<CanOrder> getUserOrders() {
		return orderRepository.findAll();
	}

	public FeedbackAverage getUserFeedbacksAverages() {
		Integer service = feedbackRepository.findAverageServiceRating();
		Integer water = feedbackRepository.findAverageWaterRating();
		List comments = feedbackRepository.findAllComments();
		feedbackAverage.setService(service);
		feedbackAverage.setWater(water);
		feedbackAverage.setComments(comments);

		return feedbackAverage;
	}

}
