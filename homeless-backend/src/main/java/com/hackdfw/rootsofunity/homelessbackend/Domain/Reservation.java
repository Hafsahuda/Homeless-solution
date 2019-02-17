package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue
    private long reservationId;

    private Date bookFrom;

    private Date bookTo;

    @OneToOne
    @JoinColumn(name = "roomId")
    private Room room;

    @OneToOne
    @JoinColumn(name = "renterId")
    private Renter renter;

    @OneToOne
    @JoinColumn(name = "charityId")
    private Charity charity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "paymentId")
    private Payment payment;


}
