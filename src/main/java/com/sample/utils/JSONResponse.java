package com.sarvint.utils;

import java.io.Serializable;
import org.springframework.stereotype.Component;

@Component
public class JSONResponse implements Serializable {

    private static final long serialVersionUID = 1L;
    private String message;
    private String code;

    public JSONResponse( String code, String message )
    {

        this.code = code;
        this.message = message;
    }
    
    
	public JSONResponse()
	{
		// TODO Auto-generated constructor stub
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
