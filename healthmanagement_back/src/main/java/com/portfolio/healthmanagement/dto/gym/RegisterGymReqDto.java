package com.portfolio.healthmanagement.dto.gym;

import java.time.LocalDate;

import javax.validation.constraints.Pattern;

import com.portfolio.healthmanagement.entity.Gym;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterGymReqDto {
	@Pattern(regexp = ".+", 
			message = "이름을 입력해주세요.")
	private String gymName;
	
	private String gymAddress;
	
	@Pattern(regexp =  "^\\d{3}-\\d{3,4}-\\d{4}$", 
			message = "올바른 전화번호 형식이 아닙니다.")
	private String gymTel;
	
	@Pattern(regexp = "^\\d+$", 
			message = "숫자만 사용 가능합니다.")
	private String businessNumber;
	
	@Pattern(regexp = "^\\d+$", 
			message = "숫자만 사용 가능합니다.")
	private String gymPrice;
	
	private LocalDate registDate;
	private LocalDate removeDate;
	
	public Gym toEntity() {
		return Gym.builder()
				.gymName(gymName)
				.gymAddress(gymAddress)
				.gymTel(gymTel)
				.businessNumber(businessNumber)
				.gymPrice(gymPrice)
				.registDate(registDate)
				.removeDate(removeDate)
				.build();
	}
}
