package com.hackdfw.rootsofunity.homelessbackend.Repository;
package org.apache.maven.maven;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Availability;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.Set;
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
	
	Set<Reservation> getReservationsByIsBookedfromAndIsBookedafter(long reserve_id, long room_id, long char_id,Date booked_from, Date booked_to);

}
