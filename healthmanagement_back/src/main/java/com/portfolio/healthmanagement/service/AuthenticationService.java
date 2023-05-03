package com.portfolio.healthmanagement.service;

import com.portfolio.healthmanagement.dto.auth.SingupReqDto;


public interface AuthenticationService {
	
	public void checkDuplicatedUsername(String username);
	public void singup(SingupReqDto singupReqDto);
}
