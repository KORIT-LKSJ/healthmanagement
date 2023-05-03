package com.portfolio.healthmanagement.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Authority;
import com.portfolio.healthmanagement.entity.User;

@Mapper
public interface UserRepositiory {
	
	public User findUserByUsername(String username); // userId 중복 확인
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
}
