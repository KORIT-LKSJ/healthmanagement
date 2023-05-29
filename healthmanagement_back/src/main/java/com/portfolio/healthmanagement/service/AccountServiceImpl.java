package com.portfolio.healthmanagement.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.account.ModifyUserInfoReqDto;
import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.repository.AccountRepository;
import com.portfolio.healthmanagement.repository.UserRepository;
import com.portfolio.healthmanagement.security.PrincipalUserDetails;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

	private final AccountRepository accountRepository;
	private final UserRepository userRepository;
	
	@Override
	public PrincipalRespDto getPrincipal() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUserDetails principalUser = (PrincipalUserDetails) authentication.getPrincipal();
		
		User userEntity = userRepository.findUserByUsername(principalUser.getUsername());
		return userEntity.toPrincipalRespDto();
	}
	
	@Override
	public User getUserInfo(int userId) {
		return accountRepository.getUserInfo(userId);
	}

	@Override
	public int modifyUser(ModifyUserInfoReqDto modifyUserInfoReqDto) {
		User userEntity = userRepository.findUserByUsername(modifyUserInfoReqDto.getUsername());
		userEntity.setEmail(modifyUserInfoReqDto.getEmail());
		userEntity.setPhone(modifyUserInfoReqDto.getPhone());
		return accountRepository.modifyUser(userEntity);
	}



	
}
