package com.jdc.react.simple.utils.exception;

import java.util.List;

public class ApiValidationException extends ApiBaseException {

	private static final long serialVersionUID = 1L;

	public ApiValidationException(List<String> errors) {
		super(errors);
	}
}
