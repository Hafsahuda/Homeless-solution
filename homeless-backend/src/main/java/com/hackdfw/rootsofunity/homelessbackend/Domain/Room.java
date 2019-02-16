package com.hackdfw.rootsofunity.homelessbackend.Domain;

import javax.persistence.*;

@Entity
public class Room {

    @Id
    @GeneratedValue
    private long roomId;

    @OneToOne
    @JoinColumn(name = "ownerId")
    private Owner owner;

    private String address;

    private String state;

    private int zipcode;
}
