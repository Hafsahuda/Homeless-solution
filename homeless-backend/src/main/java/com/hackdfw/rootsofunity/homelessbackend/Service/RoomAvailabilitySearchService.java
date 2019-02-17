package com.hackdfw.rootsofunity.homelessbackend.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import com.hackdfw.rootsofunity.homelessbackend.Domain.RoomAvailability;
import com.hackdfw.rootsofunity.homelessbackend.Repository.RoomAvailabilityRepository;

@Service
public class RoomAvailabilitySearchService {

    @Autowired
    private RoomAvailabilityRepository roomAvailabilityRepository;

    public Set<RoomAvailability> search(Date fromDate, Date toDate, String zipcode){
        Set<Availability> availabilitySet = roomAvailabilityRepository.getAvailabilitiesByRoom_ZipcodeIsAndAvailableFromIsBeforeAndAvailableToAfter(zipcode,fromDate,toDate);
        Map<Room,Set<Availability>> roomAvailabilityMap = new HashMap<>();
        availabilitySet.stream().forEach(each->{
            if(roomAvailabilityMap.containsKey(each.getRoom())){
                roomAvailabilityMap.get(each.getRoom()).add(each);
            }else{
                Set<Availability> availabilities = new HashSet<>();
                availabilities.add(each);
                roomAvailabilityMap.put(each.getRoom(),availabilities);
            }
        });

        Set<RoomAvailability> roomAvailabilitySet = roomAvailabilityMap.keySet().stream().map(each->{
            RoomAvailability roomAvailability = new RoomAvailability();
            roomAvailability.setRoom(each);
            roomAvailability.setAvailability(roomAvailabilityMap.get(each));
            return roomAvailability;
        }).collect(Collectors.toSet()) ;

        return roomAvailabilitySet;
    }

}