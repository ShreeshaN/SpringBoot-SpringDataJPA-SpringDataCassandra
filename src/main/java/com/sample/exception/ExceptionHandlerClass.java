package com.sarvint.exception;

import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.sarvint.utils.EmailSender;
import com.sarvint.utils.JSONResponse;

@ControllerAdvice
public class ExceptionHandlerClass {
	
	@Autowired
	EmailSender sender;
	
	@ExceptionHandler( CustomGenericException.class )
	public ResponseEntity<JSONResponse> handleCustomException( CustomGenericException e )
	{
		return new ResponseEntity<JSONResponse>(new JSONResponse(e.getCode(), e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler( Exception.class )
	public ResponseEntity<Exception> handleCustomException( Exception e ) throws MessagingException
	{
		
			System.out.println("in sender");
			sender.sendToDevelopers();
			System.out.println("mail sent successfully");
		return new ResponseEntity<Exception>(new Exception(e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
