package com.jdc.crud.api.input;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.util.StringUtils;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Course_;
import com.jdc.crud.model.entity.Section;
import com.jdc.crud.model.entity.Section_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record SectionSearch(
		Levels level,
		LocalDate startFrom,
		LocalDate startTo,
		String keyword) {

	public Predicate[] where(CriteriaBuilder cb, Root<Section> root) {
		
		var course = root.join(Section_.course);
		
		var params = new ArrayList<Predicate>();
		
		if(null != level) {
			params.add(cb.equal(course.get(Course_.level), level));
		}
		
		if(null != startFrom) {
			params.add(cb.greaterThanOrEqualTo(root.get(Section_.startDate), startFrom));
		}

		if(null != startTo) {
			params.add(cb.lessThanOrEqualTo(root.get(Section_.startDate), startTo));
		}
		
		if(StringUtils.hasLength(keyword)) {
			params.add(cb.like(cb.lower(course.get(Course_.name)), keyword.toLowerCase().concat("%")));
		}

		return params.toArray(size -> new Predicate[size]);
	}
}
