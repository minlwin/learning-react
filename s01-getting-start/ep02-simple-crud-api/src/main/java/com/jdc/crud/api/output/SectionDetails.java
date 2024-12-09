package com.jdc.crud.api.output;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Section;

public record SectionDetails(
		int id,
		int courseId,
		String courseName,
		Levels level,
		LocalDate startDate,
		int months,
		int fees,
		LocalTime startTime,
		LocalTime endTime,
		String remark,
		List<RegistrationInfo> registrations) {

	public static SectionDetails from(Section entity) {
		return new SectionDetails(
				entity.getId(), 
				entity.getCourse().getId(), 
				entity.getCourse().getName(), 
				entity.getCourse().getLevel(), 
				entity.getStartDate(), 
				entity.getMonths(), 
				entity.getFees(), 
				entity.getStartTime(), 
				entity.getEndTime(), 
				entity.getRemark(), 
				entity.getRegistrations().stream().map(RegistrationInfo::from).toList());
	}
}
