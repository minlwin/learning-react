package com.jdc.crud.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class RegistrationPk {

	@Column(name = "student_id")
	private int studentId;
	@Column(name = "section_id")
	private int sectionId;
}
