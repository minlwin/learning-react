package com.jdc.react.simple.api.output;

import java.time.DayOfWeek;
import java.time.LocalDate;

import com.jdc.react.simple.domain.entity.Course.Level;
import com.jdc.react.simple.domain.entity.Section;
import com.jdc.react.simple.domain.entity.Section.Type;

public record SectionDetails(
		int id,
		int courseId,
		String courseName,
		Level courseLevel,
		Type type,
		int fees, 
		int months,
		DayOfWeek[] days,
		LocalDate startAt,
		String startTime,
		String endTime) {

	public static SectionDetails from(Section entity) {
		return new SectionDetails(
				entity.getId(), 
				entity.getCourse().getId(), 
				entity.getCourse().getName(), 
				entity.getCourse().getLevel(), 
				entity.getType(), 
				entity.getFees(), 
				entity.getMonths(), 
				entity.getDays(), 
				entity.getStartDate(), 
				entity.getStartTime(), 
				entity.getEndTime());
	}
}
