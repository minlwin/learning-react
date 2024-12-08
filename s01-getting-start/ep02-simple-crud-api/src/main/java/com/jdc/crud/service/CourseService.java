package com.jdc.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.input.CourseForm;
import com.jdc.crud.api.input.CourseSearch;
import com.jdc.crud.api.output.CourseDetails;
import com.jdc.crud.api.output.CourseInfo;
import com.jdc.crud.api.output.DataModificationResult;

@Service
@Transactional
public class CourseService {

	@Transactional(readOnly = true)
	public List<CourseInfo> search(CourseSearch search) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<Integer> create(CourseForm form) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional(readOnly = true)
	public CourseDetails findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<Integer> update(int id, CourseForm form) {
		// TODO Auto-generated method stub
		return null;
	}

}
