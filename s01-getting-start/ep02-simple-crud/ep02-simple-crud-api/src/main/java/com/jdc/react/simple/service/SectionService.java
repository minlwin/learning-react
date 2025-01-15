package com.jdc.react.simple.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.react.simple.api.input.SectionForm;
import com.jdc.react.simple.api.input.SectionSearch;
import com.jdc.react.simple.api.output.SectionDetails;
import com.jdc.react.simple.api.output.SectionInfo;
import com.jdc.react.simple.domain.entity.Section;
import com.jdc.react.simple.domain.repo.CourseRepo;
import com.jdc.react.simple.domain.repo.SectionRepo;

@Service
@Transactional(readOnly = true)
public class SectionService {
	
	@Autowired
	private SectionRepo sectionRepo;
	@Autowired
	private CourseRepo courseRepo;

	@Transactional
	public SectionInfo create(SectionForm form) {
		var entity = form.entity();
		entity.setCourse(courseRepo.findById(form.courseId()).orElseThrow());
		entity = sectionRepo.save(entity);
		return SectionInfo.from(entity);
	}

	@Transactional
	public SectionInfo update(int id, SectionForm form) {
		var entity = sectionRepo.findById(id).orElseThrow();
		entity.setCourse(courseRepo.findById(form.courseId()).orElseThrow());
		form.update(entity);
		return SectionInfo.from(entity);
	}

	public SectionDetails findById(int id) {
		return sectionRepo.findById(id).map(SectionDetails::from)
				.orElseThrow();
	}

	public List<SectionInfo> search(SectionSearch search) {
		return sectionRepo.search(cb -> {
			var cq = cb.createQuery(SectionInfo.class);
			var root = cq.from(Section.class);
			SectionInfo.select(cq, root);
			cq.where(search.where(cb, root));
			return cq;
		});
	}

}
