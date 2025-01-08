package com.jdc.react.simple.api.output;

import com.jdc.react.simple.domain.entity.Course;
import com.jdc.react.simple.domain.entity.Course.Level;
import com.jdc.react.simple.domain.entity.Course_;

import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

public record CourseInfo(
		int id,
		String name,
		Level level,
		int fees,
		String description) {

	public static void select(CriteriaQuery<CourseInfo> cq, Root<Course> root) {
		cq.multiselect(
			root.get(Course_.id),
			root.get(Course_.name),
			root.get(Course_.level),
			root.get(Course_.fees),
			root.get(Course_.description)
		);
	}
}
