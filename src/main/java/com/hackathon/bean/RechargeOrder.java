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
@Table(name = "recharge")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
public class RechargeOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "mobile")
	private Long mobile;
	@Column(name = "amount")
	private Long amount;
	@Column(name = "approved")
	private Long approved;

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

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public Long getApproved() {
		return approved;
	}

	public void setApproved(Long approved) {
		this.approved = approved;
	}

}