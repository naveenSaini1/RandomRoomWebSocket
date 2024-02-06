package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Room;

public interface RoomRepo  extends JpaRepository<Room, Integer>{
	
	public Room findByRoomName(String roomName);

}
