package com.portfolio.healthmanagement.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.RegisterGymReqDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymReqDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;
import com.portfolio.healthmanagement.entity.Gym;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.exception.ErrorMap;
import com.portfolio.healthmanagement.repository.GymRepository;
import com.portfolio.healthmanagement.repository.UserRepositiory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GymService {
	private final GymRepository gymRepository;
	private final UserRepositiory userRepositiory;
	
	public GetGymRespDto getGym(int gymId) {
		return gymRepository.getGym(gymId).toGetGymDto();
	}
	
	public Map<String, Object> searchGyms(SearchGymReqDto searchGymReqDto){
		List<SearchGymRespDto> list = new ArrayList<>();
		
		int index = (searchGymReqDto.getPage() - 1) * 20;
		Map<String, Object> map = new HashMap<>();
		map.put("index", index);
		map.put("searchValue", searchGymReqDto.getSearchValue());
		
		gymRepository.searchGyms(map).forEach(gym -> {
			list.add(gym.toDto());
		});
		
		int totalCount = gymRepository.getTotalCount(map);
		
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("totalCount", totalCount);
		responseMap.put("gymList", list);
		
		return responseMap;
	}
	
	
	public int addGym(RegisterGymReqDto registerGymReqDto) {
	
		if(gymRepository.findByBusinessnNumber(registerGymReqDto.getBusinessNumber()) != null) {
			throw new CustomException("BusinessnNumber",ErrorMap.builder().put("BusinessnNumber","다시 한번 확인해보세요").build() );
		}
	  
	    return gymRepository.saveGym(registerGymReqDto.toEntity());
	}
}
