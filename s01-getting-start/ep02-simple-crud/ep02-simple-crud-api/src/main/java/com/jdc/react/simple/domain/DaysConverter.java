package com.jdc.react.simple.domain;

import java.time.DayOfWeek;
import java.util.Arrays;
import java.util.stream.Collectors;

import org.springframework.util.StringUtils;

import jakarta.persistence.AttributeConverter;

public class DaysConverter implements AttributeConverter<DayOfWeek[], String>{

	@Override
	public String convertToDatabaseColumn(DayOfWeek[] attribute) {
		
		if(null != attribute) {
			return Arrays.stream(attribute)
					.map(a -> a.name()).collect(Collectors.joining(","));
		}
		
		return null;
	}

	@Override
	public DayOfWeek[] convertToEntityAttribute(String dbData) {
		
		if(StringUtils.hasLength(dbData)) {
			return Arrays.stream(dbData.split(",")).map(DayOfWeek::valueOf).toArray(size -> new DayOfWeek[size]);
		}
		
		return null;
	}

}
