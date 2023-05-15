package com.portfolio.healthmanagement.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Gym;
import com.portfolio.healthmanagement.entity.GymOwner;
import com.portfolio.healthmanagement.entity.LikeList;

@Mapper
public interface GymRepository {
	public Gym getGym(int gymId);
	public Gym findByBusinessnNumber(String businessnNumber);
	public List<Gym> searchGyms(Map<String, Object> map);
	public int getTotalCount(Map<String, Object> map);
	public int getLikeCount(int bookId);
	public int getLikeStatus(Map<String, Object> map);
	
	public int setLike(Map<String,Object> map);
	public int disLike(Map<String, Object>map);
	
	public List<LikeList> likeGyms(int userId);
	public int saveGym(Gym gym);
	public List<Gym> NearbyGymAddressesAndGymName(Map<String, Object> map);
}
