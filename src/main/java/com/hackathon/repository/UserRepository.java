package com.hackathon.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hackathon.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByMobile(Long mobile);

	User findBalanceByMobile(Long mobile);

	@Modifying
	@Transactional
	@Query(value = "update User set balance = :balance where mobile = :mobile")
	void updateUserBalance(@Param("mobile") Long mobile, @Param("balance") Long balance);

}
