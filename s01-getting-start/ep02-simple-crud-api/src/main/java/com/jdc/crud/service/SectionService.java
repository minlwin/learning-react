package com.jdc.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.input.SectionForm;
import com.jdc.crud.api.input.SectionSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.SectionDetails;
import com.jdc.crud.api.output.SectionInfo;

@Service
@Transactional
public class SectionService {

	@Transactional(readOnly = true)
	public List<SectionInfo> search(SectionSearch search) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<Integer> create(SectionForm form) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional(readOnly = true)
	public SectionDetails findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<Integer> update(int id, SectionForm form) {
		// TODO Auto-generated method stub
		return null;
	}

}
