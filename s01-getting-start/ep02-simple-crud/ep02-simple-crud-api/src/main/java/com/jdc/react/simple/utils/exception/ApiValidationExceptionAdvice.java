package com.jdc.react.simple.utils.exception;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.BindingResult;

@Aspect
@Configuration
public class ApiValidationExceptionAdvice {

	@Pointcut("within(com.jdc.react.simple.api.*)")
	public void apiMethods() {}
	
	@Before(value = "apiMethods() and args(..,result)", argNames = "result")
	public void handle(BindingResult result) {
		
		if(result.hasErrors()) {
			throw new ApiValidationException(result.getFieldErrors().stream().map(a -> a.getDefaultMessage()).toList());
		}
	}
}
