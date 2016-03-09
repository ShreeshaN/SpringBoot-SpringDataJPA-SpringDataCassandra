package com.sarvint.exception;

public class CustomGenericException extends Exception {

	private static final long serialVersionUID = 1L;
	private String message;
	private String code;

	public CustomGenericException( String code, String msg )
	{
		this.code = code;
		message = msg;

	}

	
	public String getMessage()
	{
		return message;
	}

	
	public void setMessage( String message )
	{
		this.message = message;
	}

	
	public String getCode()
	{
		return code;
	}

	
	public void setCode( String code )
	{
		this.code = code;
	}



}
