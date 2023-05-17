package com.portfolio.healthmanagement.dto.gym;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SearchGymRespDto {
	private int gymId;
	private String gymName;
	private String gymAddress;
	private String gymTel;
	private String businessNumber;
	private String gymPrice;
	private int gymOwnerId;
	private int likeCount;
	private LocalDate registDate;
	private LocalDate removeDate;
}
