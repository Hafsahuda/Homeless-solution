package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Owner extends User {

	@Id
	@GeneratedValue
	private long ownerId;

}
