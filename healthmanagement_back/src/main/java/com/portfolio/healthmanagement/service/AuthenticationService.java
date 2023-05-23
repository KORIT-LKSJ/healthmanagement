package com.portfolio.healthmanagement.service;


import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.dto.auth.OAuth2RegisterReqDto;
import com.portfolio.healthmanagement.dto.auth.registerReqDto;


public interface AuthenticationService extends OAuth2UserService<OAuth2UserRequest, OAuth2User>, UserDetailsService {
	
	public void checkDuplicatedUsername(String username);
	public int register(registerReqDto registerReqDto);
	public String login(LoginReqDto loginReqDto);
	public int oauth2Registe(OAuth2RegisterReqDto oAuth2RegisterReqDto);

}

