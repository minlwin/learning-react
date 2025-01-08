package com.jdc.react.simple.api.input;

import java.util.ArrayList;

import org.springframework.util.StringUtils;

import com.jdc.react.simple.domain.entity.Course;
import com.jdc.react.simple.domain.entity.Course.Level;
import com.jdc.react.simple.domain.entity.Course_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record CourseSearch(
		Level level,
		String keyword) {

	public Predicate[] where(CriteriaBuilder cb, Root<Course> root) {
		var params = new ArrayList<Predicate>();
		
		if(null != level) {
			params.add(cb.equal(root.get(Course_.level), level));
		}
		
		if(StringUtils.hasLength(keyword)) {
			params.add(cb.like(cb.lower(root.get(Course_.name)), keyword.toLowerCase().concat("%")));
		}
		
		return params.toArray(size -> new Predicate[size]);
	}
}
