package com.portfolio.healthmanagement.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.registerReqDto;
import com.portfolio.healthmanagement.dto.response.JwtRespDto;
import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.Authority;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.repository.UserRepositiory;
import com.portfolio.healthmanagement.security.JwtTokenProvider;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService, UserDetailsService{
	
	private final UserRepositiory userRepositiory;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	
	public void checkDuplicatedUsername(String username) {
		if(userRepositiory.findUserByUsername(username) != null) {
			throw new CustomException("가입 된 아이디 입니다.");
		}
	}
	
	public void register(registerReqDto registerReqDto) {
		
		User userEntity = registerReqDto.toEntity();
		userRepositiory.saveUser(userEntity);
		
		Authority authority = null;
		
		if(registerReqDto.getUserType() == 1) {
			authority = Authority.builder().userId(userEntity.getUserId()).roleId(2).build();
		}
		else {
			authority = Authority.builder().userId(userEntity.getUserId()).roleId(3).build();
		}
		
		userRepositiory.saveAuthority(authority);
	}

	public JwtRespDto login(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
				new UsernamePasswordAuthenticationToken(loginReqDto.getUsername(),loginReqDto.getPassword());
		System.out.println(usernamePasswordAuthenticationToken);
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
		
		return jwtTokenProvider.createToken(authentication);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User userEntity = userRepositiory.findUserByUsername(username);
		
		if(userEntity == null) {
			throw new CustomException("로그인 실패");
		}
		
		return userEntity.toPrincipal();
	}
	
	public boolean authenticated(String accessToken) {
		return jwtTokenProvider.vaildateToken(jwtTokenProvider.getToken(accessToken));
	}
	
	public PrincipalRespDto getPrincipal(String accessToken) {
		
		Claims claims = jwtTokenProvider.getClaims(jwtTokenProvider.getToken(accessToken)); 
		User userEntity = userRepositiory.findUserByUsername(claims.getSubject());
		
		return PrincipalRespDto.builder()
				.userId(userEntity.getUserId())
				.username(userEntity.getUsername())
				.name(userEntity.getName())
				.authorities((String)claims.get("auth"))
				.build();
	}
	
}
