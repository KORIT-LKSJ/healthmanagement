package com.portfolio.healthmanagement.dto.gym;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LikeListRespDto {
	private int userId;
	private int gymId;
	private String gymName;
	private String gymAddress;
	private int gymPrice;
	private String gymImgUrl;
	private boolean likeStatus;
}