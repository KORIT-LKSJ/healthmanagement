package com.portfolio.healthmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.healthmanagement.dto.gym.SearchGymReqDto;
import com.portfolio.healthmanagement.service.GymService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GymController {
	
	private final GymService gymService;
	
	@GetMapping("/gym/{gymId}")
	public ResponseEntity<?> getGym(@PathVariable int gymId){
		return ResponseEntity.ok().body(gymService.getGym(gymId));
	}
	
	@GetMapping("/gyms")
	public ResponseEntity<?> searchGyms (SearchGymReqDto searchGymReqDto){
		System.out.println(gymService.searchGyms(searchGymReqDto));
		return ResponseEntity.ok().body(gymService.searchGyms(searchGymReqDto));
	}
	
	@GetMapping("/search/gym/address")
	public ResponseEntity<?> NearbyGymAddresses(String myAddress) {
		return ResponseEntity.ok().body(gymService.NearbyGymAddresses(myAddress));
	}
	
}