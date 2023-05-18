package com.portfolio.healthmanagement.dto.response;

import java.sql.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PrincipalRespDto {
	
	private int userId;
	private String username;
	private String name;
	private String authorities; 
	private int weight;
	private int height;
	private Date birthDate;
}
