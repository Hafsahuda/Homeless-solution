package com.hackdfw.rootsofunity.homelessbackend.Domain;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Availability {

	@Id
	@GeneratedValue
	private long availabilityId;

	private Date availableFrom;

	private Date availableTo;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "roomId")
	private Room room;

}
