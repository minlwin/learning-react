package com.jdc.react.simple.api.output;

import java.time.LocalDate;

import com.jdc.react.simple.domain.entity.Course.Level;
import com.jdc.react.simple.domain.entity.Course_;
import com.jdc.react.simple.domain.entity.Section;
import com.jdc.react.simple.domain.entity.Section.Type;
import com.jdc.react.simple.domain.entity.Section_;

import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

public record SectionInfo(
		int id,
		String courseName,
		Level courseLevel,
		Type type,
		int fees, 
		int months,
		LocalDate startAt) {
	
	public static SectionInfo from(Section entity) {
		return new SectionInfo(entity.getId(), 
				entity.getCourse().getName(), 
				entity.getCourse().getLevel(), 
				entity.getType(), 
				entity.getFees(), 
				entity.getMonths(), 
				entity.getStartDate());
	}

	public static void select(CriteriaQuery<SectionInfo> cq, Root<Section> root) {
		
		cq.multiselect(
			root.get(Section_.id),
			root.get(Section_.course).get(Course_.name),
			root.get(Section_.course).get(Course_.level),
			root.get(Section_.type),
			root.get(Section_.fees),
			root.get(Section_.months),
			root.get(Section_.startDate)
		);
	}

}
