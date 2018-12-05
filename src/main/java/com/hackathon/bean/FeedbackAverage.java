package com.hackathon.bean;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class FeedbackAverage {

	private Integer service;
	private Integer water;
	private List comments;

	public Integer getService() {
		return service;
	}

	public void setService(Integer service) {
		this.service = service;
	}

	public Integer getWater() {
		return water;
	}

	public void setWater(Integer water) {
		this.water = water;
	}

	public List getComments() {
		return comments;
	}

	public void setComments(List comments) {
		this.comments = comments;
	}
}