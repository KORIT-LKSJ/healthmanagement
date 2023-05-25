package com.portfolio.healthmanagement.entity;

import java.time.LocalDate;

import com.portfolio.healthmanagement.dto.gym.GetGymAddressAndGymNameRespDto;
import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Gym {
	
	private int gymId;
	private String gymName;
	private String gymAddress;
	private String gymTel;
	private String businessNumber;
	private String gymPrice;
	private int likeCount;
	private LocalDate registDate;
	private LocalDate removeDate;
	
	
	public SearchGymRespDto toDto() {
		return SearchGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessNumber)
				.gymPrice(gymPrice)
				.likeCount(likeCount)
				.registDate(registDate)
				.removeDate(removeDate)
				.build();
				
	}
	
	public GetGymRespDto toGetGymDto() {
		return GetGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessNumber)
				.gymPrice(gymPrice)
				.registDate(registDate)
				.removeDate(removeDate)
				.build();
		
		
	}
	
	public GetGymAddressAndGymNameRespDto toGymAddressAndNameDto() {
		return GetGymAddressAndGymNameRespDto.builder()
				.GymAddress(gymAddress)
				.GymName(gymName)
				.build();
	}
}
