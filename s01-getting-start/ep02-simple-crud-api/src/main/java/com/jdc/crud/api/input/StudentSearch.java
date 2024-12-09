package com.jdc.crud.api.input;

import java.time.LocalDateTime;
import java.util.ArrayList;

import com.jdc.crud.model.entity.Student;

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
		return params.toArray(size -> new Predicate[size]);
	}

}
