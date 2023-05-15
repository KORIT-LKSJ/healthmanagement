package com.portfolio.healthmanagement.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.User;

@Mapper
public interface AccountRepository {
	
	public User getUserInfo(int userId);
}
