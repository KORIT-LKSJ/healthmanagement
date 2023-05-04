package com.portfolio.healthmanagement.entity;

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
	private String businessnumder;
}
