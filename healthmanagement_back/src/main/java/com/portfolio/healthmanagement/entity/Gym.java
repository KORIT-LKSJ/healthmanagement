package com.portfolio.healthmanagement.entity;

import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
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
	private String businessnNumber;
	private int gymPrice;
	private String gymImgUrl;
	private int likeCount;
	
	
	public SearchGymRespDto toDto() {
		return SearchGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessnNumber)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.likeCount(likeCount)
				.build();
				
	}
	
	public GetGymRespDto toGetGymDto() {
		return GetGymRespDto.builder()
				.gymId(gymId)
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessnNumber)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.build();
	}
}
