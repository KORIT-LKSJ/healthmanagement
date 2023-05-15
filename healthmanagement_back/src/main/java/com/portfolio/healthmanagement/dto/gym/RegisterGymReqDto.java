package com.portfolio.healthmanagement.dto.gym;

import com.portfolio.healthmanagement.entity.Gym;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterGymReqDto {
	private String gymName;
	private String gymAddress;
	private String gymTel;
	private String businessNumber;
	private String gymPrice;
	private String gymImgUrl;
	
	public Gym toEntity() {
		return Gym.builder()
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessNumber)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.build();
	}
}
