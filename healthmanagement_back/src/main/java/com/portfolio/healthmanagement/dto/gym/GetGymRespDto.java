package com.portfolio.healthmanagement.dto.gym;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GetGymRespDto {
	
	private int gymId;
	private String gymName;
	private String userName;
	private String gymAddress;
	private String gymTel;
	private String businessNumber;
	private String gymPrice;
	private String gymImgUrl;
	
}
