package com.jdc.crud.api.output;

import java.time.LocalDateTime;

import com.jdc.crud.model.entity.Course;
import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Course_;
import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.entity.Section_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Root;

public record CourseInfo(
		int id,
		String name,
		Levels level,
		LocalDateTime createAt,
		int hours,
		int fees,
		long sections,
		long registrations) {

	public static void select(CriteriaBuilder cb, CriteriaQuery<CourseInfo> cq, Root<Course> root) {
		
		var sections = root.join(Course_.sections, JoinType.LEFT);
		var registrations = sections.join(Section_.registrations, JoinType.LEFT);
		
		cq.multiselect(
			root.get(Course_.id),
			root.get(Course_.name),
			root.get(Course_.level),
			root.get(Course_.createdAt),
			root.get(Course_.hours),
			root.get(Course_.fees),
			cb.count(sections.get(Section_.id)),
			cb.count(registrations.get(Registration_.id))
		);
		
		cq.groupBy(
				root.get(Course_.id),
				root.get(Course_.name),
				root.get(Course_.level),
				root.get(Course_.createdAt),
				root.get(Course_.hours),
				root.get(Course_.fees)
		);
	}
}
