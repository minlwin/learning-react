package com.jdc.crud.api.output;

import java.time.LocalDate;

import com.jdc.crud.model.entity.Course.Levels;
import com.jdc.crud.model.entity.Course_;
import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.entity.Section;
import com.jdc.crud.model.entity.Section_;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Root;

public record SectionInfo(
		int id,
		int courseId,
		String courseName,
		Levels level,
		LocalDate startDate,
		int months,
		int fees,
		long registrations) {

	public static void select(CriteriaBuilder cb, CriteriaQuery<SectionInfo> cq, Root<Section> root) {
		
		var registrations = root.join(Section_.registrations, JoinType.LEFT);
		var course = root.join(Section_.course);
		
		cq.multiselect(
			root.get(Section_.id),
			course.get(Course_.id),
			course.get(Course_.name),
			course.get(Course_.level),
			root.get(Section_.startDate),
			root.get(Section_.months),
			root.get(Section_.fees),
			cb.count(registrations.get(Registration_.id))
		);
		
		cq.groupBy(
			root.get(Section_.id),
			course.get(Course_.id),
			course.get(Course_.name),
			course.get(Course_.level),
			root.get(Section_.startDate),
			root.get(Section_.months),
			root.get(Section_.fees)
		);
	}
	
	public static SectionInfo from(Section entity) {
		return new SectionInfo(
				entity.getId(), 
				entity.getCourse().getId(), 
				entity.getCourse().getName(), 
				entity.getCourse().getLevel(), 
				entity.getStartDate(), 
				entity.getMonths(), 
				entity.getFees(), 
				entity.getRegistrations().size());
	}
}
