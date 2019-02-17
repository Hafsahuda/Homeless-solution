package com.hackdfw.rootsofunity.homelessbackend.Controller;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.sun.glass.ui.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Service.RoomAvailabilitySearchService;

@RestController
@RequestMapping(value = "/room/search")
public class AvailabilitySearchController {


    @Autowired
    RoomAvailabilitySearchService roomAvailabilitySearchService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "")
    public Set<RoomAvailability> getAvailableRooms(@RequestParam @DateTimeFormat(pattern="dd-MM-yyyy")Date fromDate, @RequestParam @DateTimeFormat(pattern="dd-MM-yyyy") Date toDate, @RequestParam String zipcode){
        Set<RoomAvailability> results = roomAvailabilitySearchService.search(fromDate, toDate, zipcode);
        return results;
    }

}