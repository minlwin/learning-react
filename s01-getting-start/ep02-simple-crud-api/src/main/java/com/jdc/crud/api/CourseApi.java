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

import com.jdc.crud.api.input.CourseForm;
import com.jdc.crud.api.input.CourseSearch;
import com.jdc.crud.api.output.CourseDetails;
import com.jdc.crud.api.output.CourseInfo;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.service.CourseService;

@RestController
@RequestMapping("courses")
public class CourseApi {
	
	@Autowired
	private CourseService service;

	@GetMapping
	List<CourseInfo> search(CourseSearch search) {
		return service.search(search);
	}
	
	@PostMapping
	DataModificationResult<Integer> create(
			@Validated @RequestBody CourseForm form, BindingResult result) {
		return service.create(form);
	}

	@GetMapping("{id}")
	CourseDetails findById(@PathVariable int id) {
		return service.findById(id);
	}

	@PutMapping("{id}")
	DataModificationResult<Integer> update(@PathVariable int id,
			@Validated @RequestBody CourseForm form, BindingResult result) {
		return service.update(id, form);
	}
}
