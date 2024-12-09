package com.jdc.crud.api.output;

import java.time.LocalDateTime;
import java.util.List;

import com.jdc.crud.model.entity.Student;
import com.jdc.crud.model.entity.Student.Education;

public record StudentDetails(
		int id,
		String name,
		String phone,
		String email,
		Education education,
		LocalDateTime entryAt,
		List<RegistrationInfo> registrations
) {

	public static StudentDetails from(Student entity) {
		return new StudentDetails(
				entity.getId(), 
				entity.getName(), 
				entity.getPhone(), 
				entity.getEmail(), 
				entity.getEducation(), 
				entity.getEntryAt(), 
				entity.getRegistrations().stream().map(RegistrationInfo::from).toList());
	}
}
