package com.hackdfw.rootsofunity.homelessbackend.Repository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Set;

public interface RoomAvailabilityRepository extends JpaRepository<Availability, Long> {

    Set<Availability> getAvailabilitiesByRoom_ZipcodeIsAndAvailableFromIsBeforeAndAvailableToAfter(int zipcode,Date fromDate, Date toDate);

}
