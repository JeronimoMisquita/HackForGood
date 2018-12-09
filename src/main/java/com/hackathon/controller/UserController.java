package com.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.bean.CanOrder;
import com.hackathon.bean.Feedback;
import com.hackathon.bean.FeedbackAverage;
import com.hackathon.bean.RechargeOrder;
import com.hackathon.bean.User;
import com.hackathon.service.RechargeService;
import com.hackathon.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private RechargeService rechargeService;

	@Autowired
	private User user;

	@Autowired
	private Feedback feedback;

	@Autowired
	private CanOrder canorder;

	@Autowired
	private RechargeOrder rechargeOrder;

	@GetMapping("/getUserProfile/{mobile}")
	public User getUserProfile(@PathVariable Long mobile) {
		return userService.getUserProfile(mobile);
	}

	/* Get a users balance */
	@GetMapping("/getUserBalance/{mobile}/")
	public User getUserBalance(@PathVariable Long mobile) {
		return userService.getUserBalance(mobile);
	}

	/* Direct update to a users balance when doing over the counter reacharge */
	@PutMapping("/updateUserBalance/{mobile}/{balance}")
	public User updateUserBalance(@PathVariable Long mobile, @PathVariable Long balance) {
		User user = userService.getUser(mobile);
		user.setMobile(mobile);
		user.setBalance(balance);
		userService.updateUserBalance(mobile, balance);
		return user;
	}

	/* Create a user */
	// @PostMapping("/createUser/{mobile}/{balance}/{profile}/{address}")
	// public User createNote(@Valid @RequestBody User user) {
	// return userService.saveUser(user);
	// }

	@PostMapping("/createUser/{mobile}/{balance}/{profile}/{address}")
	public User createNote(@PathVariable Long mobile, @PathVariable Long balance, @PathVariable String profile,
			@PathVariable String address) {
		user.setMobile(mobile);
		user.setBalance(balance);
		user.setProfile(profile);
		user.setAddress(address);
		userService.saveUser(user);
		return user;
	}

	/* Get all users feedbacks */
	@GetMapping("/getUserFeedbacks/")
	public List<Feedback> getUserFeedback() {
		return userService.getUserFeedbacks();
	}

	/* Get average of feedbacks given by users */
	@GetMapping("/getUserFeedbacksAverages/")
	public FeedbackAverage getUserFeedbacksAverages() {
		return userService.getUserFeedbacksAverages();
	}

	/* Save a users feedback */
	@PostMapping("/saveFeedback/{mobile}/{comments}/{service}/{water}")
	public Feedback savefeedback(@PathVariable Long mobile, @PathVariable String comments, @PathVariable Long service,
			@PathVariable Long water) {
		feedback.setMobile(mobile);
		feedback.setComments(comments);
		feedback.setService(service);
		feedback.setWater(water);
		userService.saveFeedback(feedback);
		return feedback;
	}

	/* Get all users order for water cans */
	@GetMapping("/getUserOrders/")
	public List<CanOrder> getUserOrders() {
		return userService.getUserOrders();
	}

	/* Place orders for cans by users */
	@PostMapping("/placeOrder/{mobile}/{cans}/{address}")
	public CanOrder placeOrder(@PathVariable Long mobile, @PathVariable String cans, @PathVariable String address) {
		canorder.setMobile(mobile);
		canorder.setCans(cans);
		canorder.setAddress(address);
		userService.saveOrder(canorder);
		return canorder;
	}

	/* Re charge an users account after approval by admin */
	@PutMapping("/approveUserBalance/{mobile}/{balance}")
	public User approveUserBalance(@PathVariable Long mobile, @PathVariable Long balance) {
		User user = userService.getUser(mobile);
		Long newBalance = userService.updateBalance(mobile, balance);
		user.setBalance(newBalance);
		userService.saveUser(user);
		rechargeService.saveAsApproved(mobile);
		return user;
	}

	/* List pending re charge approvals - 0 is pending */
	@GetMapping("/pendingRecharge/")
	public List<RechargeOrder> pendingRecharge() {
		List<RechargeOrder> rechargeOrder = rechargeService.getPendingRecharge(0L);
		return rechargeOrder;
	}

	/* List approved recharges - 1 is approved */
	@GetMapping("/approvedRecharge/")
	public List<RechargeOrder> approvedRecharge() {
		List<RechargeOrder> rechargeOrder = rechargeService.getApprovedRecharge(1L);
		return rechargeOrder;
	}
}