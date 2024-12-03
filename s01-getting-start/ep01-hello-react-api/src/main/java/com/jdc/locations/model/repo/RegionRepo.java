package com.jdc.locations.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdc.locations.model.entity.Region;

public interface RegionRepo extends JpaRepository<Region, Integer>{

}
