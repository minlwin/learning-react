package com.jdc.crud.api.output;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.jdc.crud.model.entity.Registration;
import com.jdc.crud.model.entity.RegistrationPk;
import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.entity.Section_;
import com.jdc.crud.model.entity.Student_;

import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Course_;

public record RegistrationInfo(
		RegistrationPk id,
		LocalDateTime registerAt,
		int courseId,
		String courseName,
		Levels level,
		LocalDate startDate,
		String studentName,
		String phone,
		String email) {
	
	public static void select(CriteriaQuery<RegistrationInfo> cq, Root<Registration> root) {
		var student = root.join(Registration_.student);
		var section = root.join(Registration_.section);
		var course = section.join(Section_.course);
		
		cq.multiselect(
			root.get(Registration_.id),
			root.get(Registration_.registerAt),
			course.get(Course_.id),
			course.get(Course_.name),
			course.get(Course_.level),
			section.get(Section_.startDate),
			student.get(Student_.name),
			student.get(Student_.phone),
			student.get(Student_.email)
		);
	}

	public static RegistrationInfo from(Registration entity) {
		return new RegistrationInfo(
			entity.getId(), 
			entity.getRegisterAt(), 
			entity.getSection().getCourse().getId(), 
			entity.getSection().getCourse().getName(), 
			entity.getSection().getCourse().getLevel(), 
			entity.getSection().getStartDate(), 
			entity.getStudent().getName(), 
			entity.getStudent().getPhone(), 
			entity.getStudent().getEmail()
		);
	}
}
