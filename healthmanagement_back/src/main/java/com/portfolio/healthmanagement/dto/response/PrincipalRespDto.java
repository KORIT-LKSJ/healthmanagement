package com.portfolio.healthmanagement.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PrincipalRespDto {
	
	private int userId;
	private String username;
	private String name;
	private String authorities; 
}
