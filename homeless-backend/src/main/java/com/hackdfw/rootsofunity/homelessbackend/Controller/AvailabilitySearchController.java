package com.hackdfw.rootsofunity.homelessbackend.Controller;

import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Service.RoomAvailabilitySearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Set;

@RestController
@RequestMapping(value = "/room/search")
public class AvailabilitySearchController {


    @Autowired
    RoomAvailabilitySearchService roomAvailabilitySearchService;

    @RequestMapping(value = "")
    public Set<RoomAvailability> getAvailableRooms(@RequestParam Date fromDate,@RequestParam Date toDate,@RequestParam long zipcode){
        return roomAvailabilitySearchService.search(fromDate, toDate, zipcode);
    }

}
