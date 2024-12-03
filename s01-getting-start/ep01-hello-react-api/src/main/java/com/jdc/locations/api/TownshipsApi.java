package com.jdc.locations.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.locations.model.entity.Township;
import com.jdc.locations.model.repo.TownshipRepo;

@RestController
@RequestMapping("townships")
public class TownshipsApi {
	
	@Autowired
	private TownshipRepo repo;

	@GetMapping("{district}")
	List<Township> findByDistrictId(@PathVariable int district) {
		return repo.findByDistrictId(district);
	}
}
