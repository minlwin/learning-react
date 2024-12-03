package com.jdc.locations.model.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdc.locations.model.entity.District;

public interface DistrictRepo extends JpaRepository<District, Integer>{

	List<District> findByRegionId(int region);

}
