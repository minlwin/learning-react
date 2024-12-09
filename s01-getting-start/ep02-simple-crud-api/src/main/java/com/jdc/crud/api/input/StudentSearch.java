package com.jdc.crud.api.input;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.springframework.util.StringUtils;

import com.jdc.crud.model.entity.Student;
import com.jdc.crud.model.entity.Student_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record StudentSearch(
		LocalDateTime entryFrom,
		LocalDateTime entryTo,
		String keyword
) {

	public Predicate[] where(CriteriaBuilder cb, Root<Student> root) {
		var params = new ArrayList<Predicate>();
		
		if(null != entryFrom) {
			params.add(cb.greaterThanOrEqualTo(root.get(Student_.entryAt), entryFrom));
		}
		
		if(null != entryTo) {
			params.add(cb.lessThanOrEqualTo(root.get(Student_.entryAt), entryTo));
		}

		if(StringUtils.hasLength(keyword)) {
			params.add(cb.or(
				cb.like(cb.lower(root.get(Student_.name)), keyword.toLowerCase().concat("%")),
				cb.like(cb.lower(root.get(Student_.phone)), keyword.toLowerCase().concat("%")),
				cb.like(cb.lower(root.get(Student_.email)), keyword.toLowerCase().concat("%"))
			));
		}
		
		return params.toArray(size -> new Predicate[size]);
	}

}
