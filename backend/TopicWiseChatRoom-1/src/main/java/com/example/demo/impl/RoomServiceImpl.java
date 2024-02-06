package com.example.demo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Room;
import com.example.demo.repo.RoomRepo;
import com.example.demo.service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {
	
	@Autowired(required = false)
	public RoomRepo roomRepo;

	@Override
	public Room saveRoomName(Room room) {
		return roomRepo.save(room);
		
	}

	@Override
	public Room getTheRoomByName(String roomName) {
		return roomRepo.findByRoomName(roomName);
	}

	@Override
	public List<Room> getAllTheRoom() {
		return roomRepo.findAll();
	}

}
