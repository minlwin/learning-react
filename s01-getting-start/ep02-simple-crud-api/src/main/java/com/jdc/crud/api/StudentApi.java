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

import com.jdc.crud.api.input.StudentForm;
import com.jdc.crud.api.input.StudentSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.StudentInfo;
import com.jdc.crud.service.StudentService;

@RestController
@RequestMapping("students")
public class StudentApi {
	
	@Autowired
	private StudentService service;

	@GetMapping
	List<StudentInfo> search(StudentSearch search) {
		return service.search(search);
	}
	
	@GetMapping("{id}")
	StudentSearch findById(@PathVariable int id) {
		return service.findById(id);
	}

	@PostMapping
	DataModificationResult<Integer> create(
			@Validated @RequestBody StudentForm form, BindingResult result) {
		return service.create(form);
	}

	@PutMapping("{id}")
	DataModificationResult<Integer> update(@PathVariable int id,
			@Validated @RequestBody StudentForm form, BindingResult result) {
		return service.update(id, form);
	}

}
