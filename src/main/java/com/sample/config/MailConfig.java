package com.sarvint.config;

import java.util.Properties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
@PropertySource( value = { "classpath:mail.properties" } )
public class MailConfig {
	
	private static final Logger LOG = LoggerFactory.getLogger(MailConfig.class);
	
	@Autowired
	Environment env;

	@Bean
	@Qualifier("mailForUsers")
	public JavaMailSender javaMailSender()
	{
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		Properties mailProperties = new Properties();
		mailProperties.put("mail.smtp.auth", env.getProperty("mail.smtp.auth"));
		mailProperties.put("mail.smtp.starttls.enable", env.getProperty("mail.smtp.starttls.enable"));
		mailProperties.put("mail.debug", env.getProperty("mail.debug"));
		mailSender.setJavaMailProperties(mailProperties);
		mailSender.setHost(env.getProperty("mail.host"));
		mailSender.setPort(Integer.parseInt(env.getProperty("mail.port")));
		mailSender.setProtocol(env.getProperty("mail.protocol"));
		mailSender.setUsername(env.getProperty("mail.username"));
		mailSender.setPassword(env.getProperty("mail.password"));
		
		return mailSender;
	}
	
	@Bean
	@Qualifier("mailForDevelopers")
	public JavaMailSender javaMailSenderForDevelopers()
	{
		JavaMailSenderImpl mailSenderForDevelopers = new JavaMailSenderImpl();
		Properties mailProperties = new Properties();
		mailProperties.put("mail.smtp.auth", env.getProperty("mail.developer.smtp.auth"));
		mailProperties.put("mail.smtp.starttls.enable", env.getProperty("mail.developer.smtp.starttls.enable"));
		mailProperties.put("mail.debug", env.getProperty("mail.developer.debug"));
		mailSenderForDevelopers.setJavaMailProperties(mailProperties);
		mailSenderForDevelopers.setHost(env.getProperty("mail.developer.host"));
		mailSenderForDevelopers.setPort(Integer.parseInt(env.getProperty("mail.developer.port")));
		mailSenderForDevelopers.setProtocol(env.getProperty("mail.developer.protocol"));
		mailSenderForDevelopers.setUsername(env.getProperty("mail.developer.username"));
		mailSenderForDevelopers.setPassword(env.getProperty("mail.developer.password"));
		
		return mailSenderForDevelopers;
	}
	
	
}