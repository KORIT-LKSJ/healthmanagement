package com.portfolio.healthmanagement.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Gym;

@Mapper
public interface GymRepository {
	public Gym getGym(int gymId);
	public Gym findByBusinessnNumber(String businessnNumber);
	public List<Gym> searchGyms(Map<String, Object> map);
	public int getTotalCount(Map<String, Object> map);
	public int saveGym(Gym gym);
	public List<Gym> NearbyGymAddressesAndGymName(Map<String, Object> map);
}
