package com.portfolio.healthmanagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.auth.SingupReqDto;
import com.portfolio.healthmanagement.entity.Authority;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.repository.UserRepositiory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
	
	private final UserRepositiory userRepositiory;
	
	public void checkDuplicatedUsername(String username) {
		if(userRepositiory.findUserByUsername(username) != null) {
			throw new CustomException("가입 된 아이디 입니다.");
		}
	}
	
	public void singup(SingupReqDto singupReqDto) {
		
		User userEntity = singupReqDto.toEntity();
		userRepositiory.saveUser(userEntity);
		
		List<Authority> authorities  = new ArrayList<>();
		
		if(userEntity.getBusinessOwner() == 1) {
			authorities .add(Authority.builder().userId(userEntity.getUserId()).roleId(2).build());
		}
		else {
			authorities .add(Authority.builder().userId(userEntity.getUserId()).roleId(3).build());
		}
	}
}
