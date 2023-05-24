package com.portfolio.healthmanagement.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Authority;
import com.portfolio.healthmanagement.entity.User;

@Mapper
public interface UserRepository {
	public User findUserByUsername(String username);// userId 중복 확인
	public User findUserByEmail(String email);
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
}
