package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import jakarta.persistence.Entity;

@SpringBootApplication

public class TopicWiseChatRoom1Application {

	public static void main(String[] args) {
		SpringApplication.run(TopicWiseChatRoom1Application.class, args);
	}

}
