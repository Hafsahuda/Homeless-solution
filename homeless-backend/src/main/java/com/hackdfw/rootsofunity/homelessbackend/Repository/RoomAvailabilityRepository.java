package com.hackdfw.rootsofunity.homelessbackend.Repository;

import java.util.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;

public interface RoomAvailabilityRepository extends JpaRepository<Availability, Long> {

    Set<Availability> getAvailabilitiesByRoom_ZipcodeIsAndAvailableFromIsBeforeAndAvailableToAfter(String zipcode,Date fromDate, Date toDate);

}