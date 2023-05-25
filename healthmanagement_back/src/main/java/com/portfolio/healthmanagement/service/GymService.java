package com.portfolio.healthmanagement.service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.portfolio.healthmanagement.dto.gym.MyGymListRespDto;
import com.portfolio.healthmanagement.dto.gym.GetGymAddressAndGymNameRespDto;
import com.portfolio.healthmanagement.dto.gym.GetGymRespDto;
import com.portfolio.healthmanagement.dto.gym.RegisterGymReqDto;
import com.portfolio.healthmanagement.dto.gym.LikeListRespDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymReqDto;
import com.portfolio.healthmanagement.dto.gym.SearchGymRespDto;
import com.portfolio.healthmanagement.entity.Gym;
import com.portfolio.healthmanagement.entity.GymOwner;
import com.portfolio.healthmanagement.entity.User;
import com.portfolio.healthmanagement.exception.CustomException;
import com.portfolio.healthmanagement.exception.ErrorMap;
import com.portfolio.healthmanagement.repository.GymRepository;
import com.portfolio.healthmanagement.repository.UserRepository;
import com.portfolio.healthmanagement.security.PrincipalUserDetails;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GymService {
	private final GymRepository gymRepository;
	private final UserRepository userRepositiory;
	
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

		Gym gym = registerGymReqDto.toEntity();

		if(gymRepository.findByBusinessNumber(registerGymReqDto.getBusinessNumber()) != null) {
			throw new CustomException("BusinessNumber",ErrorMap.builder().put("BusinessNumber","다시 한번 확인해보세요").build());
		}
		
		gymRepository.saveGym(gym);
		
		PrincipalUserDetails principalUserDetails = (PrincipalUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		GymOwner gymOwner = GymOwner.builder().userId(principalUserDetails.getUserId()).gymId(gym.getGymId()).build();
		gymRepository.saveGymOwner(gymOwner);
		return gym.getGymId();
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
	
	public List<MyGymListRespDto> myGyms(int userId){
		
		List<MyGymListRespDto> list = new ArrayList<>();
		
		gymRepository.myGyms(userId).forEach(addData -> {
			list.add(addData.toDto());
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
