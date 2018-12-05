package com.hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.hackathon")
@EnableAutoConfiguration
@SpringBootApplication
public class SparshApplication {

	public static void main(String[] args) {
		SpringApplication.run(SparshApplication.class, args);
	}
}
