package com.jdc.react.simple.domain.entity;

import java.time.DayOfWeek;
import java.time.LocalDate;

import com.jdc.react.simple.domain.DaysConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
	private Type type;
	
	@Column(nullable = false)
	private int fees;
	@Column(nullable = false)
	private int months;
	
	@Convert(converter = DaysConverter.class)
	@Column(nullable = false)
	private DayOfWeek[] days;
	
	@Column(nullable = false)
	private String startTime;

	@Column(nullable = false)
	private String endTime;
	
	public enum Type {
		Campus, Online
	}
}
