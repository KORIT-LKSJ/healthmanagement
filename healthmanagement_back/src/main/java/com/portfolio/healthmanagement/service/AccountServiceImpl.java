package com.portfolio.healthmanagement.service;

import java.util.ArrayList;import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.repository.AccountRepository;
import com.portfolio.healthmanagement.repository.UserRepository;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

	private final AccountRepository accountRepository;
	private final UserRepository userRepositiory;
	
	@Override
	public PrincipalRespDto getPrincipal(Authentication authentication) {
		
		User userEntity = userRepositiory.findUserByUsername(authentication.getName());
		StringBuilder authoritesBuilder = new StringBuilder();
		
		userEntity.getAuthorities().forEach(authority -> {
			authoritesBuilder.append(authority.getRole().getRoleName() + ",");
		});
		
		authoritesBuilder.delete(authoritesBuilder.length() - 1, authoritesBuilder.length());
		
		
		return PrincipalRespDto.builder()
				.userId(userEntity.getUserId())
				.username(userEntity.getUsername())
				.name(userEntity.getName())
				.authorities(authoritesBuilder.toString())
				.build();
	}
	
	@Override
	public User getUserInfo(int userId) {
		return accountRepository.getUserInfo(userId);
	}
}
