
package com.hackdfw.rootsofunity.homelessbackend.Repository;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository  extends JpaRepository<Room, Long> {

    
}
