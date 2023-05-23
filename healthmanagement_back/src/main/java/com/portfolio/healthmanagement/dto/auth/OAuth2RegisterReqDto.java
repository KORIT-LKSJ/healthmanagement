package com.portfolio.healthmanagement.dto.auth;

import java.sql.Date;

import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.portfolio.healthmanagement.entity.User;

import lombok.Data;

@Data
public class OAuth2RegisterReqDto {

	private String username;
	private String password;
	private String name;
	private String email;
	
	@Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$",
			message = "휴대폰 번호를 양식에 맞게 입력해주세요. (ex: 010-1234-5678)")
	private String phone;
	
	@Pattern(regexp = "^(19[0-9][0-9]|20\\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$",
			message = "생일을 양식에 맞게 입력해주세요. (ex: 1900-01-01)")
	private String birthdate;
	
	private String provider;
	private int userType;
	
	public User toEntity() {
		Date date = Date.valueOf(birthdate);
		return User.builder()
				.username(username)
				.password(new BCryptPasswordEncoder().encode(password))
				.email(email)
				.name(name)
				.phone(phone)
				.birthdate(date)
				.provider(provider)
				.build();
	}
}
