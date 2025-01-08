package com.jdc.react.simple.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.react.simple.api.input.SectionForm;
import com.jdc.react.simple.api.input.SectionSearch;
import com.jdc.react.simple.api.output.SectionDetails;
import com.jdc.react.simple.api.output.SectionInfo;
import com.jdc.react.simple.service.SectionService;

@RestController
@RequestMapping("section")
public class SectionManagementApi {
	
	@Autowired
	private SectionService service;

	@GetMapping
	List<SectionInfo> search(SectionSearch search) {
		return service.search(search);
	}
	
	@GetMapping("{id}")
	SectionDetails findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@PostMapping
	SectionDetails create(
			@Validated @RequestBody SectionForm form, BindingResult result) {
		return service.create(form);
	}

	@PutMapping("{id}")
	SectionDetails update(@PathVariable int id,
			@Validated @RequestBody SectionForm form, BindingResult result) {
		return service.update(id, form);
	}
}
