package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Availability {

    @Id
    @GeneratedValue
    private long availabilityId;

    private Date availableFrom;

    private Date availableTo;

    @OneToOne
    @JoinColumn(name = "roomId")
    private Room room;

}
