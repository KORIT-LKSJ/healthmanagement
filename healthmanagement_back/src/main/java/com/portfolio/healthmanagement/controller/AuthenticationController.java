package com.portfolio.healthmanagement.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.healthmanagement.aop.annotation.ValidAspect;
import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.registerReqDto;
import com.portfolio.healthmanagement.service.AuthenticationService;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class AuthenticationController {
	
	private final AuthenticationService authenticationService;
	
	@ValidAspect
	@PostMapping("/auth/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody  registerReqDto registerReqDto, BindingResult bindingResult){
		authenticationService.checkDuplicatedUsername(registerReqDto.getUsername());
		authenticationService.register(registerReqDto);
		
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult){
		System.out.println(loginReqDto);
		return ResponseEntity.ok().body(authenticationService.login(loginReqDto));
	}
	
	@GetMapping("/auth/authenticated")
	public ResponseEntity<?> authenticated(String accessToken){
		return ResponseEntity.ok().body(authenticationService.authenticated(accessToken));
		
	}
	
	
	
	
	
}

