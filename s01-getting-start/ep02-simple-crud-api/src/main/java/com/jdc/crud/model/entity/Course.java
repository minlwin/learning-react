package com.jdc.crud.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private Levels level;
	private int hours;
	private int fees;
	private String remark;
	
	public enum Levels {
		Basic, Intermediate, Advance
	}
}
