package com.example.demo.model;

public class Message {
	private Integer  messageId;
	private String content;
	private String senderName;
	private String roomName;
	
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public Integer getMessageId() {
		return messageId;
	}
	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getSenderName() {
		return senderName;
	}
	public void setSenderName(String senderName) {
		this.senderName = senderName;
		
		
		
	}
	@Override
	public String toString() {
		return "Message [messageId=" + messageId + ", content=" + content + ", senderName=" + senderName + ", roomName="
				+ roomName + "]";
	}
	
	
	
	

}
