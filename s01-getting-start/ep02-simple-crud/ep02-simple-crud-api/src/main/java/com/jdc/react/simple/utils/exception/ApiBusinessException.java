package com.jdc.react.simple.utils.exception;

import java.util.List;

public class ApiBusinessException extends ApiBaseException {

	private static final long serialVersionUID = 1L;

	public ApiBusinessException(String message) {
		super(List.of(message));
	}

	public ApiBusinessException(String message, Throwable e) {
		super(List.of(message));
	}
}
