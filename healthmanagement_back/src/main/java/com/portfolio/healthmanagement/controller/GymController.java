package com.portfolio.healthmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.healthmanagement.dto.gym.RegisterGymReqDto;
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
	
	@PostMapping("/faclilty")
	public ResponseEntity<?> createGym(@RequestBody RegisterGymReqDto registerGymReqDto){
		System.out.println(registerGymReqDto);
		return ResponseEntity.ok().body(gymService.addGym(registerGymReqDto));
	}
}