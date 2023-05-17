package com.portfolio.healthmanagement.service;

import org.springframework.security.core.Authentication;

import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.User;

public interface AccountService {

	public PrincipalRespDto getPrincipal(Authentication authentication);
	public User getUserInfo(int userId);
}
