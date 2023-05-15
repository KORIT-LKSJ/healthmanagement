package com.portfolio.healthmanagement.entity;

import com.portfolio.healthmanagement.dto.gym.LikeListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class LikeList {
	private int userId;
	private int gymId;
	private String gymName;
	private String gymAddress;
	private int gymPrice;
	private String gymImgUrl;
	
	public LikeListRespDto toDto(){
		return LikeListRespDto.builder()
				.userId(userId)
				.gymId(gymId)
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymPrice(gymPrice)
				.gymImgUrl(gymImgUrl)
				.likeStatus(userId==0)
				.build();
	}
	
}
