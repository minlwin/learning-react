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

import com.jdc.crud.api.input.RegistrationForm;
import com.jdc.crud.api.input.RegistrationSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.RegistrationDetails;
import com.jdc.crud.api.output.RegistrationInfo;
import com.jdc.crud.service.RegistrationService;

@RestController
@RequestMapping("registrations")
public class RegistrationApi {
	
	@Autowired
	private RegistrationService service;

	@GetMapping
	List<RegistrationInfo> search(RegistrationSearch search) {
		return service.search(search);
	}
	
	@PostMapping
	DataModificationResult<String> create(
			@Validated @RequestBody RegistrationForm form, BindingResult result) {
		return service.create(form);
	}

	@GetMapping("{id}")
	RegistrationDetails findById(@PathVariable String id) {
		return service.findById(id);
	}

	@PutMapping("{id}")
	DataModificationResult<String> update(@PathVariable String id,
			@Validated @RequestBody RegistrationForm form, BindingResult result) {
		return service.update(id, form);
	}
}
