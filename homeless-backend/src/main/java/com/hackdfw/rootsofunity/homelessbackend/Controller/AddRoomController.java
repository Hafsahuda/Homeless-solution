package com.hackdfw.rootsofunity.homelessbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackdfw.rootsofunity.homelessbackend.Domain.AddRoomReq;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import com.hackdfw.rootsofunity.homelessbackend.Repository.AvailabilityRepository;
import com.hackdfw.rootsofunity.homelessbackend.Repository.RoomRepository;

@RestController
public class AddRoomController {

	@Autowired
	RoomRepository roomRepo;
	
	@Autowired
	AvailabilityRepository availabilityRepo;

	@RequestMapping("/room")
	public ResponseEntity postController(@RequestBody AddRoomReq roomReq) {

		Room room = roomReq.getRoom();
		Availability availabilty = roomReq.getAvailability();
		availabilty.setRoom(room);	
		
		
		return ResponseEntity.ok(HttpStatus.OK);
	}

}
