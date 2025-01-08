package com.jdc.react.simple.api.output;

import java.util.List;

import com.jdc.react.simple.domain.entity.Course;
import com.jdc.react.simple.domain.entity.Course.Level;

public record CourseDetails(
		int id,
		String name,
		Level level,
		int fees,
		String description,
		List<SectionInfo> sections) {

	public static CourseDetails from(Course entity) {
		return new CourseDetails(
				entity.getId(), 
				entity.getName(), 
				entity.getLevel(), 
				entity.getFees(), 
				entity.getDescription(), 
				entity.getSections().stream().map(SectionInfo::from).toList());
	}
}
