package com.portfolio.healthmanagement.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<?> NearbyGymAddressesAndGymName(String myAddress) {
		return ResponseEntity.ok().body(gymService.NearbyGymAddressesAndGymName(myAddress));
	}
	
	@GetMapping("/gym/{gymId}/like")
	public ResponseEntity<?> getLikeCount(@PathVariable int gymId){
		return ResponseEntity.ok().body(gymService.getLikeCount(gymId));
	}
	
	@GetMapping("/gym/{gymId}/like/status")
	public ResponseEntity<?> getLikeStatus(@PathVariable int gymId, @RequestParam int userId){
		return ResponseEntity.ok().body(gymService.getLikeStatus(gymId, userId));
	}
	
	@PostMapping("/gym/{gymId}/like")
	public ResponseEntity<?> setLike(@PathVariable int gymId, @RequestBody Map<String, Integer> requestMap){
		return ResponseEntity.ok().body(gymService.setLike(gymId, requestMap.get("userId")));
	}
	
	@DeleteMapping("/gym/{gymId}/like")
	public ResponseEntity<?> disLike(@PathVariable int gymId, int userId){
		return ResponseEntity.ok().body(gymService.disLike(gymId, userId));
	}
	
	@GetMapping("/gym/{userId}/like/list")
	public ResponseEntity<?> likeGyms(@PathVariable int userId){
		System.out.println(userId);
		return ResponseEntity.ok().body(gymService.likeGyms(userId));
	}
}