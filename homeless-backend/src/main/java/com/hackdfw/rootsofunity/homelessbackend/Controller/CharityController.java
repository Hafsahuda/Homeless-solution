package com.hackdfw.rootsofunity.homelessbackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hackdfw.rootsofunity.homelessbackend.Domain.Charity;
import com.hackdfw.rootsofunity.homelessbackend.Repository.CharityRepository;

public class CharityController {

	@Autowired
	CharityRepository charityRepo;

	@RequestMapping("/searchCharity")
	public List<Charity> postController(@RequestParam String zip) {

		List<Charity> charityList = charityRepo.findByZipcode(zip);

		return charityList;
	}
}
