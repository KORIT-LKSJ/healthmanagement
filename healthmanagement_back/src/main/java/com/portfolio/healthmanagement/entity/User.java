package com.portfolio.healthmanagement.entity;



import java.sql.Date;
import java.util.List;

import com.portfolio.healthmanagement.dto.response.PrincipalRespDto;
import com.portfolio.healthmanagement.security.PrincipalUserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	private int userId;
	private String username;
	private String password;
	private String name;
	private String phone;
	private String email;
	private Date birthdate;
	private String provider;

	
	private List<Authority> authorities;
	
	
	public PrincipalUserDetails toPrincipal() {
		return PrincipalUserDetails.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.email(email)
				.authorities(authorities)
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
				.email(email)
				.name(name)
				.authorities(builder.toString())
				.birthdate(birthdate)
				.build();
	}

}
