package com.sarvint.utils;

import org.springframework.stereotype.Component;

@Component
public class UserUIBean {

	private String firstName;
	private String lastName;
	private Integer userId;
	private String emailId;
	private String code;

	public Integer getUserId()
	{
		return userId;
	}

	public void setUserId( Integer userId )
	{
		this.userId = userId;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName( String firstName )
	{
		this.firstName = firstName;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName( String lastName )
	{
		this.lastName = lastName;
	}

	public String getEmailId()
	{
		return emailId;
	}

	public void setEmailId( String emailId )
	{
		this.emailId = emailId;
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
