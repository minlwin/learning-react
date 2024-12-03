package com.jdc.locations.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.locations.model.entity.Region;
import com.jdc.locations.model.repo.RegionRepo;

@RestController
@RequestMapping("regions")
public class RegionsApi {

	@Autowired
	private RegionRepo repo;
	
	@GetMapping
	public List<Region> findAll() {
		return repo.findAll();
	}
}
