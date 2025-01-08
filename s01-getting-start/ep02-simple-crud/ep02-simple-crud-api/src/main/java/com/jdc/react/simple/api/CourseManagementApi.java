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

import com.jdc.react.simple.api.input.CourseForm;
import com.jdc.react.simple.api.input.CourseSearch;
import com.jdc.react.simple.api.output.CourseDetails;
import com.jdc.react.simple.api.output.CourseInfo;
import com.jdc.react.simple.service.CourseService;

@RestController
@RequestMapping("course")
public class CourseManagementApi {
	
	@Autowired
	private CourseService service;

	@GetMapping
	List<CourseInfo> search(CourseSearch search) {
		return service.search(search);
	}
	
	@GetMapping("{id}")
	CourseDetails findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@PostMapping
	CourseDetails create(
			@Validated @RequestBody CourseForm form, BindingResult result) {
		return service.create(form);
	}

	@PutMapping("{id}")
	CourseDetails update(@PathVariable int id,
			@Validated @RequestBody CourseForm form, BindingResult result) {
		return service.update(id, form);
	}
}
