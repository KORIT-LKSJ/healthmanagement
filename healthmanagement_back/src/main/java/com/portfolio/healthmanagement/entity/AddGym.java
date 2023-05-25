package com.portfolio.healthmanagement.entity;

import com.portfolio.healthmanagement.dto.gym.AddGymListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class AddGym {
	private int userId;
	private int gymId;
	private String gymName;
	private String gymAddress;
	private String gymPrice;
	
	public AddGymListRespDto toDto() {
		return AddGymListRespDto.builder()
				.userId(userId)
				.gymId(gymId)
				.gymAddress(gymAddress)
				.gymPrice(gymPrice)
				.build();
	}
	
	

}
