package com.jdc.crud.model.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Section {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(optional = false)
	private Course course;
	
	@Column(nullable = false)
	private LocalDate startDate;
	
	@Column(nullable = false)
	private int months;
	
	@Column(nullable = false)
	private int fees;
	
	@Column(nullable = false)
	private LocalTime startTime;
	
	@Column(nullable = false)
	private LocalTime endTime;

	private String remark;

	private LocalDateTime createdAt;
	
	@OneToMany(mappedBy = "section")
	private List<Registration> registrations;
}
