package com.portfolio.healthmanagement.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class GymImgsDetail {
	private int postsImgId;
	private int gymId;
	private String originName;
	private String tempName;
	private String imgSize;
}
