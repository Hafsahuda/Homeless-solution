package com.hackdfw.rootsofunity.homelessbackend.Controller;

import java.util.Date;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Service.RoomAvailabilitySearchService;

@RestController
@RequestMapping(value = "/room/search")
public class AvailabilitySearchController {


    @Autowired
    RoomAvailabilitySearchService roomAvailabilitySearchService;

    @RequestMapping(value = "")
    public Set<RoomAvailability> getAvailableRooms(@RequestParam @DateTimeFormat(pattern="yyyy-MM-dd")Date fromDate, @RequestParam @DateTimeFormat(pattern="yyyy-MM-dd") Date toDate, @RequestParam int zipcode){
        return roomAvailabilitySearchService.search(fromDate, toDate, zipcode);
    }

}