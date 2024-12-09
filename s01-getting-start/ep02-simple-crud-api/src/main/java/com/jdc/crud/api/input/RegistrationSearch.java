package com.jdc.crud.api.input;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.util.StringUtils;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Course_;
import com.jdc.crud.model.entity.Registration;
import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.entity.Section_;
import com.jdc.crud.model.entity.Student_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record RegistrationSearch(
		Levels level,
		LocalDate registeredFrom,
		LocalDate registeredTo,
		String keyword
) {

	public Predicate[] where(CriteriaBuilder cb, Root<Registration> root) {
		
		var section = root.join(Registration_.section);
		var course = section.join(Section_.course);
		var student = root.join(Registration_.student);
		
		var params = new ArrayList<Predicate>();
		
		if(null != level) {
			params.add(cb.equal(course.get(Course_.level), level));
		}
		
		if(null != registeredFrom) {
			params.add(cb.greaterThanOrEqualTo(root.get(Registration_.registerAt), registeredFrom.atStartOfDay()));
		}
		
		if(null != registeredTo) {
			params.add(cb.lessThan(root.get(Registration_.registerAt), registeredTo.plusDays(1).atStartOfDay()));
		}

		if(StringUtils.hasLength(keyword)) {
			params.add(cb.or(
				cb.like(cb.lower(course.get(Course_.name)), keyword.toLowerCase().concat("%")),
				cb.like(cb.lower(student.get(Student_.name)), keyword.toLowerCase().concat("%")),
				cb.like(cb.lower(student.get(Student_.phone)), keyword.toLowerCase().concat("%")),
				cb.like(cb.lower(student.get(Student_.email)), keyword.toLowerCase().concat("%"))
			));
		}
		
		return params.toArray(size -> new Predicate[size]);
	}

}
