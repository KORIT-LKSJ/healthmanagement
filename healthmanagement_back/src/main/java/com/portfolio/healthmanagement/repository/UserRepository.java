package com.portfolio.healthmanagement.repository;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Authority;
import com.portfolio.healthmanagement.entity.User;

@Mapper
public interface UserRepository {
	public User findUserByUsername(String username);// userId 중복 확인
	public User findUserByEmail(String email); 
	public User findUsernameByEmail(String email); // 주어진 이메일로 유저아이디를 찾아서 해당 유저의 아이디를 반환하는 역할 
	public User findUserPasswordByEmail(String email); // 주어진 이메일로 패스워드를 찾음 
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
}
