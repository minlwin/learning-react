package com.jdc.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.input.RegistrationForm;
import com.jdc.crud.api.input.RegistrationSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.RegistrationDetails;
import com.jdc.crud.api.output.RegistrationInfo;

@Service
@Transactional
public class RegistrationService {

	@Transactional(readOnly = true)
	public List<RegistrationInfo> search(RegistrationSearch search) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<String> create(RegistrationForm form) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional(readOnly = true)
	public RegistrationDetails findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	public DataModificationResult<Integer> update(String id, RegistrationForm form) {
		// TODO Auto-generated method stub
		return null;
	}

}
