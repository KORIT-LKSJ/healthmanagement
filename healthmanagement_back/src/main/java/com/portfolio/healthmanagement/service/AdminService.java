package com.portfolio.healthmanagement.service;

import com.portfolio.healthmanagement.dto.auth.LoginReqDto;

public interface AdminService {

	public String login(LoginReqDto loginReqDto);
}
