package com.portfolio.healthmanagement.dto.auth;

import java.sql.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.portfolio.healthmanagement.entity.User;

import lombok.Data;

@Data
public class registerReqDto {
	
	@Pattern(regexp = "^[a-zA-Z0-9_-]{3,16}$",
			message = "아이디는 소문자,대문자,숫자,밑줄 및 하이픈을 포함 할 수 있고 3 ~ 16자로 작성")
	private String username;
	
	// password 검사
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성")
	private String password;
	
	// email 검사
	@Email
	@NotBlank
	private String email;
	
	// name 검사
	@Pattern(regexp = "^[가-힣]{2,7}$",
			message = "이름은 한글이름만 작성 가능합니다.")
	private String name;
	
	// phone 번호 검사
	@Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$",
		    message = "휴대폰 번호를 양식에 맞게 입력해주세요. (ex: 010-1234-5678)")
	private String phone;
	
	private Date birthdate;

	private int userType;

	public User toEntity() {
		return User.builder()
				.username(username)
				.password(new BCryptPasswordEncoder().encode(password))
				.email(email)
				.name(name)
				.phone(phone)
				.birthDate(birthdate)
				.build();
	}
}
