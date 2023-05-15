package com.portfolio.healthmanagement.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.gym.GetGymAddressAndGymNameRespDto;
import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.LikeListRespDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymReqDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;
import com.portfolio.healthmanagement.repository.GymRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GymService {
	private final GymRepository gymRepository;
	
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
		
		int totalCount  = gymRepository.getTotalCount(map);
		
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("totalCount", totalCount);
		responseMap.put("gymList", list);
		
		return responseMap;
	}
	
	public int getLikeCount(int gymId) {
		return gymRepository.getLikeCount(gymId);
	}
	
	public int getLikeStatus(int gymId, int userId) {
		Map<String, Object> map = new HashMap<>();
		map.put("gymId", gymId);
		map.put("userId", userId);
		
		return gymRepository.getLikeStatus(map);
	}
	
	public int setLike(int gymId, int userId) {
		Map<String, Object> map = new HashMap<>();
		map.put("gymId", gymId);
		map.put("userId", userId);
		
		return gymRepository.setLike(map);
	}
	
	public int disLike(int gymId, int userId) {
		Map<String, Object> map = new HashMap<>();
		map.put("gymId", gymId);
		map.put("userId", userId);
		
		return gymRepository.disLike(map);
	}
	
	public List<LikeListRespDto> likeGyms(int userId) {
		List<LikeListRespDto> list = new ArrayList<>();
		gymRepository.likeGyms(userId).forEach(likeData -> {
			list.add(likeData.toDto());
		});
		
		return list;
	}
	
	public Map<String, Object> NearbyGymAddressesAndGymName(String myAddress) {
		List<GetGymAddressAndGymNameRespDto> list = new ArrayList<>();
		Map<String, Object> map = new HashMap<>();
		map.put("myAddress", myAddress);
		
		gymRepository.NearbyGymAddressesAndGymName(map).forEach(gym -> {
			list.add(gym.toGymAddressAndNameDto());
		});
		
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("gymData",list);
		
		return responseMap;
		
	}

}
