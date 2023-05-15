package com.portfolio.healthmanagement.dto.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LikeListRespDto {
	private int userId;
	private int gymId;
	private String gymName;
	private String gymAddress;
	private int gymPrice;
	private String gymImgUrl;
	private boolean likeStatus; 
}
