package com.portfolio.healthmanagement.service;

import org.springframework.security.core.userdetails.UserDetails;

import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.registerReqDto;
import com.portfolio.healthmanagement.dto.response.JwtRespDto;


public interface AuthenticationService {
	
	public void checkDuplicatedUsername(String username);
	public void register(registerReqDto registerReqDto);
	public JwtRespDto login(LoginReqDto loginReqDto);
}
