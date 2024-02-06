package com.example.demo.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Room;

@Service
public interface RoomService {
	
	public Room saveRoomName(Room room);
	public Room getTheRoomByName(String roomName);
	public List<Room> getAllTheRoom();
	

}
