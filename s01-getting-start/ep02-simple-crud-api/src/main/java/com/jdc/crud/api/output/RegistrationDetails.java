package com.jdc.crud.api.output;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.jdc.crud.model.entity.Registration;
import com.jdc.crud.model.entity.RegistrationPk;
import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Student.Education;

public record RegistrationDetails(
		RegistrationPk id,
		LocalDateTime registerAt,
		int courseId,
		String courseName,
		Levels level,
		LocalDate startDate,
		int months,
		int fees,
		LocalTime startTime,
		LocalTime endTime,
		String name,
		String phone,
		String email,
		Education education,
		LocalDateTime entryAt) {

	public static RegistrationDetails from(Registration entity) {
		
		return new RegistrationDetails(
				entity.getId(), 
				entity.getRegisterAt(), 
				entity.getSection().getCourse().getId(), 
				entity.getSection().getCourse().getName(), 
				entity.getSection().getCourse().getLevel(), 
				entity.getSection().getStartDate(),
				entity.getSection().getMonths(),
				entity.getSection().getFees(),
				entity.getSection().getStartTime(),
				entity.getSection().getEndTime(),
				entity.getStudent().getName(), 
				entity.getStudent().getPhone(), 
				entity.getStudent().getEmail(), 
				entity.getStudent().getEducation(), 
				entity.getStudent().getEntryAt()
				);
	}
}
