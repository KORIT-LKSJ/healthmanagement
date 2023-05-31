package com.portfolio.healthmanagement.service;

import com.portfolio.healthmanagement.dto.account.ModifyPasswordReqDto;
import com.portfolio.healthmanagement.dto.account.ModifyUserInfoReqDto;
import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.entity.User;

public interface AccountService {

	public PrincipalRespDto getPrincipal();
	public User getUserInfo(int userId);
	public int modifyUser(ModifyUserInfoReqDto modifyUserInfoReqDto);
	public int modifyPassword(ModifyPasswordReqDto modifyPasswordReqDto);
}
