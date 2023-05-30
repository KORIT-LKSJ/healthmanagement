package com.portfolio.healthmanagement.service;

import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.User;

public interface AccountService {

	public PrincipalRespDto getPrincipal();
	public User getUserInfo(int userId);
	public String findUsernameByEmail(String email);
}
