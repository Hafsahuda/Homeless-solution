package com.hackdfw.rootsofunity.homelessbackend.Repository;
import java.util.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Reservation;
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
	
	Set<Reservation> getReservationsByIsBookedfromAndIsBookedafter(long reserve_id, long room_id, long char_id,Date booked_from, Date booked_to);

}
