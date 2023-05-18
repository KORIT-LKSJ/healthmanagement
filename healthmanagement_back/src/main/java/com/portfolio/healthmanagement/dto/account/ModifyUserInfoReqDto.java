package com.portfolio.healthmanagement.dto.account;

import java.sql.Date;

import lombok.Data;

@Data
public class ModifyUserInfoReqDto {
	private int userId;
	private String phone;
	private String email;
	private int weight;
	private int height;
	private Date birthDate;
	

}
