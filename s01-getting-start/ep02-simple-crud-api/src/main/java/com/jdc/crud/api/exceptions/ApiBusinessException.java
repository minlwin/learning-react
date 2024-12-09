package com.jdc.crud.api.exceptions;

import java.util.List;

public class ApiBusinessException extends ApiBaseException{

	private static final long serialVersionUID = 1L;

	public ApiBusinessException(String message) {
		super(List.of(message));
	}

}