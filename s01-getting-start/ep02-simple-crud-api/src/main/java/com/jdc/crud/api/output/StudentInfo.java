package com.jdc.crud.api.output;

import java.time.LocalDateTime;

import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.entity.Student;
import com.jdc.crud.model.entity.Student_;
import com.jdc.crud.model.entity.Student.Education;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Root;

public record StudentInfo(
		int id,
		String name,
		String phone,
		String email,
		Education education,
		LocalDateTime entryAt,
		long registrations) {

	public static void select(CriteriaBuilder cb, CriteriaQuery<StudentInfo> cq, Root<Student> root) {
		
		var registrations = root.join(Student_.registrations, JoinType.LEFT);
		
		cq.multiselect(
			root.get(Student_.id),
			root.get(Student_.name),
			root.get(Student_.phone),
			root.get(Student_.email),
			root.get(Student_.education),
			root.get(Student_.entryAt),
			cb.count(registrations.get(Registration_.id))
		);
	}
}
