package com.portfolio.healthmanagement.dto.gym;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SearchGymRespDto {
	private int gymId;
	private String gymName;
	private int userId;
	private String userName;
	private String gymAddress;
	private String gymTel;
	private String businessNumber;
	private String gymPrice;
	private String gymImgUrl;
}
