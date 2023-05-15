package com.portfolio.healthmanagement.entity;

import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class GymOwner {
	private int gymOwnerId;
	private int gym_id;
	private int user_id;
	
	private User user;
	private Gym gym;
//	
//	public SearchGymRespDto toDto() {
//		return SearchGymRespDto.builder()
//				.gymId(gym.getGymId())
//				.gymName(gym.getGymName())
//				.userId(user.getUserId())
//				.userName(user.getUsername())
//				.gymAddress(gym.getGymAddress())
//				.gymTel(gym.getGymTel())
//				.businessNumber(gym.getBusinessnNumber())
//				.gymPrice(gym.getGymPrice())
//				.gymImgUrl(gym.getGymImgUrl())
//				.build();
//				
//	}
//	
//	public GetGymRespDto toGetGymDto() {
//		return GetGymRespDto.builder()
//				.gymId(gym.getGymId())
//				.gymName(gym.getGymName())
//				.userName(user.getUsername())
//				.gymAddress(gym.getGymAddress())
//				.gymTel(gym.getGymTel())
//				.businessNumber(gym.getBusinessnNumber())
//				.gymPrice(gym.getGymPrice())
//				.gymImgUrl(gym.getGymImgUrl())
//				.build();
//	}
}
