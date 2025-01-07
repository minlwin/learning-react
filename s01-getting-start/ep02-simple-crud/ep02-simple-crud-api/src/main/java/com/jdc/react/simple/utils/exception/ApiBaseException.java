package com.jdc.react.simple.utils.exception;

import java.util.List;

public abstract class ApiBaseException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private List<String> errors;

	public ApiBaseException(List<String> errors) {
		super();
		this.errors = errors;
	}
	
	public ApiBaseException(List<String> errors, Throwable e) {
		super(e);
		this.errors = errors;
	}
	
	
	public List<String> getErrors() {
		return errors;
	}

}
