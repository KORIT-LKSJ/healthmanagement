package com.portfolio.healthmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.healthmanagement.dto.account.ModifyPasswordReqDto;
import com.portfolio.healthmanagement.dto.account.ModifyUserInfoReqDto;
import com.portfolio.healthmanagement.service.AccountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {

	private final AccountService accountService;
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> getUserInfo(@PathVariable int userId) {
		return ResponseEntity.ok(accountService.getUserInfo(userId));
	}
	
	@GetMapping("/principal")
	public ResponseEntity<?> principal() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		System.out.println(accountService.getPrincipal());
		return ResponseEntity.ok().body(accountService.getPrincipal());
	}
	
	@PutMapping("/password")
	public ResponseEntity<?> modifyPassword(@RequestBody ModifyPasswordReqDto modifyPasswordReqDto) {
		System.out.println(modifyPasswordReqDto);
		return ResponseEntity.ok(null);
	}
	@PutMapping("/modifyinfo")
	public ResponseEntity<?> modifyuserInfo(@RequestBody ModifyUserInfoReqDto modifyUserInfoReqDto){
		System.out.println(modifyUserInfoReqDto);
		return ResponseEntity.ok(null);
	}
}
