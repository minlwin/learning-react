package com.jdc.crud.api;

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

import com.jdc.crud.api.input.SectionForm;
import com.jdc.crud.api.input.SectionSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.SectionDetails;
import com.jdc.crud.api.output.SectionInfo;
import com.jdc.crud.service.SectionService;

@RestController
@RequestMapping("sections")
public class SectionApi {
	
	@Autowired
	private SectionService service;

	@GetMapping
	List<SectionInfo> search(SectionSearch search) {
		return service.search(search);
	}
	
	@PostMapping
	DataModificationResult<Integer> create(
			@Validated @RequestBody SectionForm form, BindingResult result) {
		return service.create(form);
	}

	@GetMapping("{id}")
	SectionDetails findById(@PathVariable int id) {
		return service.findById(id);
	}

	@PutMapping("{id}")
	DataModificationResult<Integer> update(@PathVariable int id,
			@Validated @RequestBody SectionForm form, BindingResult result) {
		return service.update(id, form);
	}

}
