package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import java.util.Set;

@Data
public class RoomAvailability {

    private Room room;

    private Set<Availability> availability;

}
