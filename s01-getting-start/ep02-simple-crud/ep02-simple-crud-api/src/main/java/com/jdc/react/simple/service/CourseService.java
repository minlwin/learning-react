package com.jdc.react.simple.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.react.simple.api.input.CourseForm;
import com.jdc.react.simple.api.input.CourseSearch;
import com.jdc.react.simple.api.output.CourseDetails;
import com.jdc.react.simple.api.output.CourseInfo;
import com.jdc.react.simple.domain.entity.Course;
import com.jdc.react.simple.domain.repo.CourseRepo;

@Service
@Transactional(readOnly = true)
public class CourseService {
	
	@Autowired
	private CourseRepo repo;

	@Transactional
	public CourseDetails create(CourseForm form) {
		return CourseDetails.from(repo.save(form.entity()));
	}

	@Transactional
	public CourseDetails update(int id, CourseForm form) {
		return repo.findById(id).map(a -> {
			form.update(a);
			return a;
		}).map(CourseDetails::from)
		.orElseThrow();
	}

	public CourseDetails findById(int id) {
		return repo.findById(id)
				.map(CourseDetails::from)
				.orElseThrow();
	}

	public List<CourseInfo> search(CourseSearch search) {
		return repo.search(cb -> {
			var cq = cb.createQuery(CourseInfo.class);
			var root = cq.from(Course.class);
			CourseInfo.select(cq, root);
			cq.where(search.where(cb, root));
			return cq;
		});
	}

}
