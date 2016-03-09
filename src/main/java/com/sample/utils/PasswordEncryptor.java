package com.sarvint.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


/**
 * 
 * Helps in encrypting the password
 */
public class PasswordEncryptor {
	
	/**
	 * 
	 * @param password
	 * @return A string
	 */
	
	public static String encryptor(String password)
	{
		MessageDigest m = null;
		StringBuffer s = null;
		try
		{
			m = MessageDigest.getInstance("SHA-256");
			byte[] bytes = m.digest(password.getBytes());
			s = new StringBuffer();
			for(byte b : bytes)
			{
				s.append(Integer.toHexString(0xff & b));
			}
			
		}
		catch( NoSuchAlgorithmException e )
		{
			e.printStackTrace();
		}
		return s.toString();
		
	}

}
