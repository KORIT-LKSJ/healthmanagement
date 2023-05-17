package com.portfolio.healthmanagement.service;


import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.registerReqDto;
import com.portfolio.healthmanagement.dto.response.JwtRespDto;
import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;


public interface AuthenticationService {
	
	public void checkDuplicatedUsername(String username);
	public void register(registerReqDto registerReqDto);
	public String login(LoginReqDto loginReqDto);

}

