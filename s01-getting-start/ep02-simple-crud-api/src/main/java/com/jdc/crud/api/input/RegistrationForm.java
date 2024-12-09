package com.jdc.crud.api.input;

import jakarta.validation.constraints.NotNull;

public record RegistrationForm(
		@NotNull(message = "Please select section")
		Integer sectionId,
		@NotNull(message = "Please select student")
		Integer studentId,
		String remark) {

}
