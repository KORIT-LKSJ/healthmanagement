package com.portfolio.healthmanagement.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.healthmanagement.aop.annotation.ValidAspect;
import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.SingupReqDto;
import com.portfolio.healthmanagement.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class AuthenticationController {
	
	private final AuthenticationService authenticationService;
	
	@ValidAspect
	@PostMapping("/auth/singup")
	public ResponseEntity<?> singup(@Valid @RequestBody  SingupReqDto signupReqDto, BindingResult bindingResult){
		
		authenticationService.checkDuplicatedUsername(signupReqDto.getUsername());
		authenticationService.singup(signupReqDto);
		
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult){
		return ResponseEntity.ok().body(null);
	}
}
