package com.jdc.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.input.StudentForm;
import com.jdc.crud.api.input.StudentSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.StudentInfo;

@Service
@Transactional(readOnly = true)
public class StudentService {

	public List<StudentInfo> search(StudentSearch search) {
		// TODO Auto-generated method stub
		return null;
	}

	public StudentSearch findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	public DataModificationResult<Integer> update(int id, StudentForm form) {
		// TODO Auto-generated method stub
		return null;
	}

}
