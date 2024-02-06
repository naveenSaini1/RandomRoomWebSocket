package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.impl.RoomServiceImpl;
import com.example.demo.model.Message;
import com.example.demo.model.Room;

@RestController
public class WebSocketController {
	@Autowired (required = false)
	private RoomServiceImpl roomService;
	
	  private final SimpMessagingTemplate messagingTemplate;

	    public WebSocketController(SimpMessagingTemplate messagingTemplate) {
	        this.messagingTemplate = messagingTemplate;
	    }
	


	
	@MessageMapping("/room/{room}")
	public void getTheRoomMessages(@Payload Message message) {
		
		System.out.println(message+" =-=----------------- "+ "/topic/room/" +message.getRoomName());
        messagingTemplate.convertAndSend("/topic/room/" + roomService.getTheRoomByName(message.getRoomName()).getRoomName(), message);
		
	}
	
	@PostMapping("/createroom/{room}")
	public Room createRoom(@PathVariable String room) {
		Room roomm=new Room();
		roomm.setRoomId(0);
		roomm.setRoomName(room);
		 return roomService.saveRoomName(roomm);
		
	}
	@GetMapping("/rooms")
	public List<Room> getAllRooms(){
	return	roomService.getAllTheRoom();
	}
	
	

}
