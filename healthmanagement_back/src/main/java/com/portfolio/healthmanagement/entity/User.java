package com.portfolio.healthmanagement.entity;


import java.sql.Date;
import java.util.List;

import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.security.PrincipalUserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	private int userId;
	private String username;
	private String password;
	private String name;
	private String phone;
	private String email;
	private Date birthDate;
	
	private List<Authority> authorities;
	
	
	public PrincipalUserDetails toPrincipal() {
		return PrincipalUserDetails.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.authorities(authorities)
				.name(name)
				.phone(phone)
				.email(email)
				.birthDate(birthDate)
				.build();
	}
	
	public PrincipalRespDto toPrincipalRespDto() {
		
		StringBuilder builder = new StringBuilder();
		authorities.forEach(authority -> {
			builder.append(authority.getRole().getRoleName() + ",");
		});
		builder.delete(builder.length() - 1, builder.length());
		
		return PrincipalRespDto.builder()
				.userId(userId)
				.username(username)
				.name(name)
				.authorities(builder.toString())
				.name(name)
				.phone(phone)
				.email(email)
				.birthDate(birthDate)
				.build();
	}

}
