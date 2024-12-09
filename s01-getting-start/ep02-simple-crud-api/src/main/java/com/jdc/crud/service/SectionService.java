package com.jdc.crud.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.exceptions.ApiBusinessException;
import com.jdc.crud.api.input.SectionForm;
import com.jdc.crud.api.input.SectionSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.SectionDetails;
import com.jdc.crud.api.output.SectionInfo;
import com.jdc.crud.model.entity.Section;
import com.jdc.crud.model.entity.Section_;
import com.jdc.crud.model.repo.CourseRepo;
import com.jdc.crud.model.repo.SectionRepo;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;

@Service
@Transactional
public class SectionService {
	
	@Autowired
	private SectionRepo sectionRepo;
	@Autowired
	private CourseRepo courseRepo;

	@Transactional(readOnly = true)
	public List<SectionInfo> search(SectionSearch search) {
		
		Function<CriteriaBuilder, CriteriaQuery<SectionInfo>> queryFunc = cb -> {
			var cq = cb.createQuery(SectionInfo.class);
			var root = cq.from(Section.class);
			
			SectionInfo.select(cb, cq, root);
			cq.where(search.where(cb, root));
			
			cq.orderBy(cb.desc(root.get(Section_.startDate)));
			
			return cq;
		};
		
		return sectionRepo.search(queryFunc);
	}

	public DataModificationResult<Integer> create(SectionForm form) {
		
		var course = courseRepo.findById(form.courseId())
				.orElseThrow(() -> new ApiBusinessException("There is no course with id %s.".formatted(form.courseId())));

		var entity = new Section();
		
		entity.setCourse(course);
		entity.setFees(course.getFees());
		
		entity.setStartDate(form.startDate());
		entity.setStartTime(form.startTime());
		entity.setEndTime(form.endTime());
		entity.setMonths(form.months());
		entity.setRemark(form.remark());
		entity.setCreatedAt(LocalDateTime.now());
		
		return new DataModificationResult<Integer>(entity.getId(), "Section has been created successfully.");
	}

	@Transactional(readOnly = true)
	public SectionDetails findById(int id) {
		return sectionRepo.findById(id)
				.map(SectionDetails::from)
				.orElseThrow(() -> new ApiBusinessException("There is no section with id %s.".formatted(id)));
	}

	public DataModificationResult<Integer> update(int id, SectionForm form) {
		
		var entity = sectionRepo.findById(id)
				.orElseThrow(() -> new ApiBusinessException("There is no section with id %s.".formatted(id)));
		
		entity.setStartDate(form.startDate());
		entity.setStartTime(form.startTime());
		entity.setEndTime(form.endTime());
		entity.setMonths(form.months());
		entity.setRemark(form.remark());
		
		return new DataModificationResult<Integer>(entity.getId(), "Section has been updated successfully.");
	}

}
