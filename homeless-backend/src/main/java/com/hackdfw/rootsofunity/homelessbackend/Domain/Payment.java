package com.hackdfw.rootsofunity.homelessbackend.Domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Payment {

    @Id
    @GeneratedValue
    private long paymentId;

    private double amount;
}
