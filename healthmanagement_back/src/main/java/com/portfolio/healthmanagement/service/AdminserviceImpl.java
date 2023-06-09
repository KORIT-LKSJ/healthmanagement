package com.portfolio.healthmanagement.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminserviceImpl implements AdminService{
	
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;

	@Override
	public String login(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
				loginReqDto.getUsername(), loginReqDto.getPassword());
		Authentication authentication = authenticationManagerBuilder.getObject()
				.authenticate(usernamePasswordAuthenticationToken);
		
		StringBuilder role = new StringBuilder();
		
		authentication.getAuthorities().forEach(authority -> {
			role.append(authority);
		});
		
		if(!role.toString().equals("ROLE_ADMIN")) {
			throw new CustomException("관리자 계정으로 로그인 해주세요.");
		}
		
		return jwtTokenProvider.generateAccessToken(authentication);
	}

}
