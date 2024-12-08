package com.jdc.crud.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Registration {

	@EmbeddedId
	private RegistrationPk id;
	
	@ManyToOne
	@JoinColumn(name = "student_id", referencedColumnName = "id", insertable = false, updatable = false)
	private Student student;

	@ManyToOne
	@JoinColumn(name = "section_id", referencedColumnName = "id",insertable = false, updatable = false)
	private Section section;
	
	private LocalDateTime registerAt;
	private String remark;
}
