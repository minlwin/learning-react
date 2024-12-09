package com.jdc.crud.model.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private Levels level;
	
	private int hours;
	private int fees;
	private String remark;
	
	private LocalDateTime createdAt;
	
	@OneToMany(mappedBy = "course")
	private List<Section> sections;
	
	public enum Levels {
		Basic, Intermediate, Advance
	}
}
