package com.hackdfw.rootsofunity.homelessbackend.Domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Renter {

    @Id
    @GeneratedValue
    private long renterId;

    private String name;

    private String email;

    private String phone;
}
