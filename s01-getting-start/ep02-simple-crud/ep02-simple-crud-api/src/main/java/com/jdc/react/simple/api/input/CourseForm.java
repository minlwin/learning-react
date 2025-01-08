package com.jdc.react.simple.api.input;

import com.jdc.react.simple.domain.entity.Course;
import com.jdc.react.simple.domain.entity.Course.Level;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CourseForm(
		@NotEmpty(message = "Please enter course name.")
		String name,
		@NotNull(message = "Please select course level.")
		Level level, 
		@NotNull(message = "Please enter course fees.")
		Integer fees,
		String description) {

	public Course entity() {
		var entity = new Course();
		entity.setName(name);
		entity.setLevel(level);
		entity.setFees(fees);
		entity.setDescription(description);
		return entity;
	}
	
	public void update(Course entity) {
		entity.setName(name);
		entity.setLevel(level);
		entity.setFees(fees);
		entity.setDescription(description);
	}
}
