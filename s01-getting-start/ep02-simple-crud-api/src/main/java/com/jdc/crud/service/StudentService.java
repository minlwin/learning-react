package com.jdc.crud.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.exceptions.ApiBusinessException;
import com.jdc.crud.api.input.StudentForm;
import com.jdc.crud.api.input.StudentSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.StudentDetails;
import com.jdc.crud.api.output.StudentInfo;
import com.jdc.crud.model.entity.Student;
import com.jdc.crud.model.entity.Student_;
import com.jdc.crud.model.repo.StudentRepo;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;

@Service
@Transactional(readOnly = true)
public class StudentService {
	
	@Autowired
	private StudentRepo studentRepo;

	public List<StudentInfo> search(StudentSearch search) {
		
		Function<CriteriaBuilder, CriteriaQuery<StudentInfo>> queryFunc = cb -> {
			var cq = cb.createQuery(StudentInfo.class);
			var root = cq.from(Student.class);
			
			StudentInfo.select(cb, cq, root);
			cq.where(search.where(cb, root));
			
			cq.orderBy(cb.asc(root.get(Student_.name)));
			
			return cq;
		};
		
		return studentRepo.search(queryFunc);
	}

	public StudentDetails findById(int id) {
		return studentRepo.findById(id)
				.map(StudentDetails::from)
				.orElseThrow(() -> new ApiBusinessException("There is no student with id %s.".formatted(id)));
	}

	@Transactional
	public DataModificationResult<Integer> create(StudentForm form) {
		
		var entity = new Student();
		
		entity.setName(form.name());
		entity.setPhone(form.phone());
		entity.setEmail(form.email());
		entity.setEducation(form.education());
		entity.setEntryAt(LocalDateTime.now());
		entity = studentRepo.save(entity);
		
		return new DataModificationResult<Integer>(entity.getId(), "Student has been created successfully.");
	}

	@Transactional
	public DataModificationResult<Integer> update(int id, StudentForm form) {
		
		var entity = studentRepo.findById(id)
				.orElseThrow(() -> new ApiBusinessException("There is no student with id %s.".formatted(id)));
		
		entity.setName(form.name());
		entity.setPhone(form.phone());
		entity.setEmail(form.email());
		entity.setEducation(form.education());
		
		return new DataModificationResult<Integer>(entity.getId(), "Student has been updated successfully.");
	}

}
