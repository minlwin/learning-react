package com.jdc.crud.api.input;

import java.time.LocalDateTime;
import java.util.ArrayList;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Registration;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public record RegistrationSearch(
		Levels level,
		LocalDateTime registeredFrom,
		LocalDateTime registeredTo,
		String keyword
) {

	public Predicate[] where(CriteriaBuilder cb, Root<Registration> root) {
		var params = new ArrayList<Predicate>();
		return params.toArray(size -> new Predicate[size]);
	}

}
