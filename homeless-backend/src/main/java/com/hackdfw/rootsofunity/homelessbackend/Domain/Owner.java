package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Owner {

    @Id
    @GeneratedValue
    private long ownerId;

    private String name;

    private String email;

    private String phone;

}
