package com.jdc.react.simple.api.input;

import java.time.DayOfWeek;
import java.time.LocalDate;

import com.jdc.react.simple.domain.entity.Section;
import com.jdc.react.simple.domain.entity.Section.Type;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record SectionForm(
		@NotNull(message = "Please select course.")
		Integer courseId,
		@NotNull(message = "Please select start date.")
		LocalDate startDate,
		@NotNull(message = "Please select section type.")
		Type type, 
		@NotNull(message = "Please enter fees.")
		Integer fees, 
		@NotNull(message = "Please enter months.")
		Integer months,
		@NotEmpty(message = "Please select days.")
		DayOfWeek[] days,
		@NotEmpty(message = "Please select start time.")
		String startTime,
		@NotEmpty(message = "Please select end time.")
		String endTime) {

	public Section entity() {
		var entity = new Section();
		
		entity.setStartDate(startDate);
		entity.setType(type);
		entity.setFees(fees);
		entity.setMonths(months);
		entity.setDays(days);
		entity.setStartTime(startTime);
		entity.setEndTime(endTime);
		
		return entity;
	}
	
	public void update(Section entity) {
		entity.setStartDate(startDate);
		entity.setType(type);
		entity.setFees(fees);
		entity.setMonths(months);
		entity.setDays(days);
		entity.setStartTime(startTime);
		entity.setEndTime(endTime);
	}
}
