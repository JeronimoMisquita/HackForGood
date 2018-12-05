package com.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.bean.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	Feedback findByMobile(Long mobile);

	Feedback findBalanceByMobile(Long mobile);

	@Query("SELECT AVG(service) FROM Feedback")
	Integer findAverageServiceRating();

	@Query("SELECT AVG(water) FROM Feedback")
	Integer findAverageWaterRating();

	@Query("SELECT comments FROM Feedback")
	List findAllComments();

}
