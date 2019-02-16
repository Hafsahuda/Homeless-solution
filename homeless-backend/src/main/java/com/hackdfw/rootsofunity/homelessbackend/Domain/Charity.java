package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Charity {

    @Id
    @GeneratedValue
    private long charityId;

    private String orgName;

    private String phone;

    private String email;

    private String address;

    private String state;

    private int zipcode;
}
