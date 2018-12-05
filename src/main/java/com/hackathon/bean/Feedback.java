package com.hackathon.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Component
@Table(name = "feedback")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "mobile")
	private Long mobile;
	@Column(name = "comments")
	private String comments;
	@Column(name = "service")
	private Long service;
	@Column(name = "water")
	private Long water;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Long getService() {
		return service;
	}

	public void setService(Long service) {
		this.service = service;
	}

	public Long getWater() {
		return water;
	}

	public void setWater(Long water) {
		this.water = water;
	}

}