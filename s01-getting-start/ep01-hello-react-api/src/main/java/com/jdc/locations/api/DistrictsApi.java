package com.jdc.locations.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.locations.model.entity.District;
import com.jdc.locations.model.repo.DistrictRepo;

@RestController
@RequestMapping("districts")
public class DistrictsApi {
	
	@Autowired
	private DistrictRepo repo;

	@GetMapping("{region}")
	List<District> findByRegion(@PathVariable(name = "region") int id) {
		return repo.findByRegionId(id);
	}
}
