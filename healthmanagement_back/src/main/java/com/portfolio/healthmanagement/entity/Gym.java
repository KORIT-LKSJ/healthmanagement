package com.portfolio.healthmanagement.entity;

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
	private int userId;
	private String gymAddress;
	private String gymTel;
	private String businessnNumber;
	private int gymPrice;
	private String gymImgUrl;
	
	private User user;
	
	public SearchGymRespDto toDto() {
		return SearchGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.userId(userId)
				.userName(user.getUsername())
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessnNumber)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.build();
				
	}
	
	public GetGymRespDto toGetGymDto() {
		return GetGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.userName(user.getUsername())
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessnNumber)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.build();
	}
	
	public GetGymAddressAndGymNameRespDto toGymAddressAndNameDto() {
		return GetGymAddressAndGymNameRespDto.builder()
				.GymAddress(gymAddress)
				.GymName(gymName)
				.build();
	}
}
