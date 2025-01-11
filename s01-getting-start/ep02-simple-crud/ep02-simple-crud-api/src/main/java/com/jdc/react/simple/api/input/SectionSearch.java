package com.jdc.react.simple.api.input;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.util.StringUtils;

import com.jdc.react.simple.domain.entity.Course.Level;
import com.jdc.react.simple.domain.entity.Course_;
import com.jdc.react.simple.domain.entity.Section;
import com.jdc.react.simple.domain.entity.Section.Type;
import com.jdc.react.simple.domain.entity.Section_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record SectionSearch(
		Level level,
		Type type, 
		LocalDate startFrom,
		LocalDate startTo,
		String keyword
		) {

	public Predicate[] where(CriteriaBuilder cb, Root<Section> root) {
		var params = new ArrayList<Predicate>();
		
		if(null != level) {
			params.add(cb.equal(root.get(Section_.course).get(Course_.level), level));
		}
		
		if(null != type) {
			params.add(cb.equal(root.get(Section_.type), type));
		}
		
		if(null != startFrom) {
			params.add(cb.greaterThanOrEqualTo(root.get(Section_.startDate), startFrom));
		}

		if(null != startTo) {
			params.add(cb.lessThanOrEqualTo(root.get(Section_.startDate), startTo));
		}
		
		if(StringUtils.hasLength(keyword)) {
			params.add(cb.like(cb.lower(root.get(Section_.course).get(Course_.name)), keyword.toLowerCase().concat("%")));
		}

		return params.toArray(size -> new Predicate[size]);
	}
}
