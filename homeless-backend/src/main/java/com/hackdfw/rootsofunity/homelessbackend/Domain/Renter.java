package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Renter {

    @Id
    @GeneratedValue
    private long renterId;

    private String name;

    private String email;

    private String phone;
}
