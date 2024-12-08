package com.jdc.crud.model.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class RegistrationPk {

	private int studentId;
	private int sectionId;
}
