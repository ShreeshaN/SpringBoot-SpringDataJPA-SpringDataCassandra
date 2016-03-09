package com.sarvint.utils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class EmailSender {

	@Autowired
	@Qualifier( "mailForUsers" )
	JavaMailSender sender;
	
	
	@Autowired
	@Qualifier("mailForDevelopers")
	JavaMailSender devSender;

	public void send() throws MessagingException
	{

		MimeMessage mailMsgUsers = sender.createMimeMessage();
		MimeMessageHelper mailMessage = new MimeMessageHelper(mailMsgUsers);
		mailMessage.setTo("sarvint.developers@gmail.com");
		mailMessage.setSubject("Subject goes here");
		mailMessage.setText("For Users");
		sender.send(mailMsgUsers);

	}

	
	public void sendToDevelopers() throws MessagingException
	{
		MimeMessage mailMsgDevelopers = devSender.createMimeMessage();
		MimeMessageHelper mailMessage = new MimeMessageHelper(mailMsgDevelopers);
		mailMessage.setTo("sarvint.developers@gmail.com");
		mailMessage.setSubject("Subject goes here");
		mailMessage.setText("For developers");
		devSender.send(mailMsgDevelopers);

	}

}