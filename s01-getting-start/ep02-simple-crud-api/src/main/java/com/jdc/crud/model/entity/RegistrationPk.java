package com.jdc.crud.model.entity;

import com.jdc.crud.api.exceptions.ApiBusinessException;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationPk {

	@Column(name = "student_id")
	private int studentId;
	@Column(name = "section_id")
	private int sectionId;
	
	public static RegistrationPk from(String code) {
		var array = code.split("-");
		
		if(array.length != 2) {
			throw new ApiBusinessException("Invalid registration code.");
		}
		
		return new RegistrationPk(Integer.parseInt(array[0]), Integer.parseInt(array[1]));
	}
	
	public String getCode() {
		return "%04d-%06d".formatted(sectionId, studentId);
	}
}
