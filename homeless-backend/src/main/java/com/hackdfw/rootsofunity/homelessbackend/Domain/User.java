package com.hackdfw.rootsofunity.homelessbackend.Domain;

import lombok.Data;

@Data
public class User {
	
	private String orgName;

	private String phone;

	private String email;

	private String address;

	private String state;

	private String zipcode;
}
