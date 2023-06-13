package com.portfolio.healthmanagement.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.admin.UserCountRespDto;
import com.portfolio.healthmanagement.dto.admin.UserInfoRespDto;
import com.portfolio.healthmanagement.dto.auth.LoginReqDto;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.repository.AdminRepository;
import com.portfolio.healthmanagement.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminserviceImpl implements AdminService{
	
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	private final AdminRepository adminRepository;

	@Override
	public String login(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
				loginReqDto.getUsername(), loginReqDto.getPassword());
		Authentication authentication = authenticationManagerBuilder.getObject()
				.authenticate(usernamePasswordAuthenticationToken);
		
		StringBuilder role = new StringBuilder();
		
		authentication.getAuthorities().forEach(authority -> {
			role.append(authority);
		});
		if(!role.toString().equals("ROLE_ADMIN")) {
			throw new CustomException("관리자 계정으로 로그인 해주세요.");
		}
		
		return jwtTokenProvider.generateAccessToken(authentication);
	}

	@Override
	public List<Map<String, Object>> userCount() {
		List<Map<String, Object>> responseData = new ArrayList<>();
		LocalDate today = LocalDate.now();
		for (int i = 0; i < 7; i++) {
			Map<String, Object> map = new HashMap<>();
            LocalDate previousDay = today.minusDays(-i+7);
            int userCount  = adminRepository.userCount(Date.valueOf(previousDay));
            map.put("date", previousDay);
            map.put("value", userCount);
            responseData.add(map);
        }
		
		return responseData;
	}

	@Override
	public List<Map<String, Object>> gymCount() {
		List<Map<String, Object>> responseData = new ArrayList<>();
		LocalDate today = LocalDate.now();
		for (int i = 0; i < 7; i++) {
			Map<String, Object> map = new HashMap<>();
            LocalDate previousDay = today.minusDays(-i+7);
            int gymCount  = adminRepository.gymCount(Date.valueOf(previousDay));
            map.put("date", previousDay);
            map.put("value", gymCount);
            responseData.add(map);
        }
		
		System.out.println(responseData);
		return responseData;
	}

	@Override
	public int userPage() {
		int page = 0;
		if((adminRepository.userPage()%10) == 0) {
			page = adminRepository.userPage()/10;
		} else {
			page = adminRepository.userPage()/10 + 1;
		}
		return page;
	}

	@Override
	public List<UserInfoRespDto> getUsers(int page) {
		return null;
	}

}
