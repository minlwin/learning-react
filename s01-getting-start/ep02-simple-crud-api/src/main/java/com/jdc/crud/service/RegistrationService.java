package com.jdc.crud.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jdc.crud.api.exceptions.ApiBusinessException;
import com.jdc.crud.api.input.RegistrationForm;
import com.jdc.crud.api.input.RegistrationSearch;
import com.jdc.crud.api.output.DataModificationResult;
import com.jdc.crud.api.output.RegistrationDetails;
import com.jdc.crud.api.output.RegistrationInfo;
import com.jdc.crud.model.entity.Registration;
import com.jdc.crud.model.entity.RegistrationPk;
import com.jdc.crud.model.entity.Registration_;
import com.jdc.crud.model.repo.RegistrationRepo;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;

@Service
@Transactional
public class RegistrationService {
	
	@Autowired
	private RegistrationRepo registrationRepo;

	@Transactional(readOnly = true)
	public List<RegistrationInfo> search(RegistrationSearch search) {
		
		Function<CriteriaBuilder, CriteriaQuery<RegistrationInfo>> queryFunc = cb -> {
			var cq = cb.createQuery(RegistrationInfo.class);
			var root = cq.from(Registration.class);
			
			RegistrationInfo.select(cq, root);
			cq.where(search.where(cb, root));
			
			cq.orderBy(cb.desc(root.get(Registration_.registerAt)));
			return cq;
		};
		
		return registrationRepo.search(queryFunc);
	}

	public DataModificationResult<String> create(RegistrationForm form) {
		
		var entity = new Registration();
		entity.setId(new RegistrationPk(form.sectionId(), form.studentId()));
		entity.setRegisterAt(LocalDateTime.now());
		entity.setRemark(form.remark());
		
		return new DataModificationResult<String>(entity.getId().getCode(), "Registration has been created successfully.");
	}

	@Transactional(readOnly = true)
	public RegistrationDetails findById(String id) {
		return registrationRepo.findById(RegistrationPk.from(id))
				.map(RegistrationDetails::from)
				.orElseThrow(() -> new ApiBusinessException("There is no registration with code %s.".formatted(id)));
	}

	public DataModificationResult<String> update(String id, RegistrationForm form) {
		
		var entity = registrationRepo.findById(RegistrationPk.from(id))
				.orElseThrow(() -> new ApiBusinessException("There is no registration with code %s.".formatted(id)));
		
		entity.setRemark(form.remark());
		
		return new DataModificationResult<String>(entity.getId().getCode(), "Registration has been updated successfully.");
	}

}
