package com.jdc.crud.api.input;

import com.jdc.crud.model.entity.Student.Education;

import jakarta.validation.constraints.NotEmpty;

public record StudentForm(
		@NotEmpty(message = "Please enter student name.")
		String name,
		@NotEmpty(message = "Please enter phone number.")
		String phone,
		@NotEmpty(message = "Please enter email address.")
		String email,
		Education education) {

}
