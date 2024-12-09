package com.jdc.crud.service;

import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.exceptions.ApiBusinessException;
import com.jdc.crud.api.input.CourseForm;
import com.jdc.crud.api.input.CourseSearch;
import com.jdc.crud.api.output.CourseDetails;
import com.jdc.crud.api.output.CourseInfo;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.model.entity.Course;
import com.jdc.crud.model.entity.Course_;
import com.jdc.crud.model.repo.CourseRepo;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;

@Service
@Transactional
public class CourseService {
	
	@Autowired
	private CourseRepo courseRepo;

	@Transactional(readOnly = true)
	public List<CourseInfo> search(CourseSearch search) {
		
		Function<CriteriaBuilder, CriteriaQuery<CourseInfo>> queryFunc = cb -> {
			var cq = cb.createQuery(CourseInfo.class);
			var root = cq.from(Course.class);
			
			CourseInfo.select(cb, cq, root);
			cq.where(search.where(cb, root));
			
			cq.orderBy(cb.asc(root.get(Course_.name)));
			
			return cq;
		};
		
		return courseRepo.search(queryFunc);
	}

	public DataModificationResult<Integer> create(CourseForm form) {
		
		var entity = new Course();
		
		entity.setName(form.name());
		entity.setLevel(form.level());
		entity.setFees(form.fees());
		entity.setHours(form.hours());
		entity.setRemark(form.remark());

		entity = courseRepo.save(entity);

		return new DataModificationResult<Integer>(entity.getId(), "Course has been created successfully.");
	}

	@Transactional(readOnly = true)
	public CourseDetails findById(int id) {
		return courseRepo.findById(id)
				.map(CourseDetails::from)
				.orElseThrow(() -> new ApiBusinessException("There is no course with id %s.".formatted(id)));
	}

	public DataModificationResult<Integer> update(int id, CourseForm form) {
		
		var entity = courseRepo.findById(id)
				.orElseThrow(() -> new ApiBusinessException("There is no course with id %s.".formatted(id)));
		
		entity.setName(form.name());
		entity.setLevel(form.level());
		entity.setFees(form.fees());
		entity.setHours(form.hours());
		entity.setRemark(form.remark());
		
		return new DataModificationResult<Integer>(id, "Course has been updated successfully.");
	}

}
