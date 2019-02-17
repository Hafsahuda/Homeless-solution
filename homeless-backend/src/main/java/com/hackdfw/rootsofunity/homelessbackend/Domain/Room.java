package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Room {

    @Id
    @GeneratedValue
    private long roomId;

    @OneToOne
    @JoinColumn(name = "ownerId")
    private Owner owner;

    private String address;

    private String state;

    private String zipcode;
}
