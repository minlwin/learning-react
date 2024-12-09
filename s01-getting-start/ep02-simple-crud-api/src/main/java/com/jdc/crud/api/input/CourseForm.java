package com.jdc.crud.api.input;

import com.jdc.crud.model.entity.Course.Levels;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CourseForm(
		@NotBlank(message = "Please enter course name.")
		String name,
		@NotNull(message = "Please select course level.")
		Levels level,
		int hours,
		int fees,
		String remark) {

}
