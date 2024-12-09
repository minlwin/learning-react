package com.jdc.crud.api.output;

import java.time.LocalDateTime;
import java.util.List;

import com.jdc.crud.model.entity.Course;
import com.jdc.crud.model.entity.Course.Levels;

public record CourseDetails(
		int id,
		String name,
		Levels level,
		LocalDateTime createAt,
		int hours,
		int fees,
		String remark,
		List<SectionInfo> sections) {

	public static CourseDetails from(Course entity) {
		return new CourseDetails(
				entity.getId(), 
				entity.getName(), 
				entity.getLevel(), 
				entity.getCreatedAt(), 
				entity.getHours(), 
				entity.getFees(),
				entity.getRemark(), 
				entity.getSections().stream().map(SectionInfo::from).toList());
	}
}
