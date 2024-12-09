package com.jdc.crud.api.input;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;

public record SectionForm(
		@NotNull(message = "Please select course.")
		Integer courseId,
		@NotNull(message = "Please select start date.")
		LocalDate startDate,
		@NotNull(message = "Please enter duration in months.")
		Integer months,
		@NotNull(message = "Please select start time.")
		LocalTime startTime,
		@NotNull(message = "Please select end time.")
		LocalTime endTime,
		String remark) {

}
