package com.portfolio.healthmanagement.dto.gym;

import java.time.LocalDate;

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
	private LocalDate registDate;
	private LocalDate removeDate;
	
	
	public Gym toEntity() {
		return Gym.builder()
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessNumber)
				.gymPrice(gymPrice)
				.registDate(registDate)
				.removeDate(removeDate)
				.build();
	}
}
