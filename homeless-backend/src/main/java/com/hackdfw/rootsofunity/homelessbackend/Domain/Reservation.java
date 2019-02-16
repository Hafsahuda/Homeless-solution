package com.hackdfw.rootsofunity.homelessbackend.Domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Reservation {

    @Id
    @GeneratedValue
    private long reservationId;

    private Date from_Date;

    private Date to_Date;

    @OneToOne
    @JoinColumn(name = "roomId")
    private Room room;

    @OneToOne
    @JoinColumn(name = "renterId")
    private Renter renter;

    @OneToOne
    @JoinColumn(name = "charityId")
    private Charity charity;

    @OneToOne
    @JoinColumn(name = "paymentId")
    private Payment payment;


}
