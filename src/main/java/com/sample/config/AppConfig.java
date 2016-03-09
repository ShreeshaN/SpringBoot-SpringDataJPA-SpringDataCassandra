package com.sample.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@ComponentScan( basePackages = "com.sample" )
@PropertySource( value = { "classpath:application.properties" } )
public class AppConfig extends WebMvcConfigurerAdapter {

	@Autowired
	private Environment environment;
	
																																																												@Override
	public void configureDefaultServletHandling( DefaultServletHandlerConfigurer configurer )
	{
		configurer.enable();
	}

	@Bean
	public DataSource dataSource()
	{
		HikariConfig config = new HikariConfig();
		int poolSize = 20;
		config.setMaximumPoolSize(poolSize);
		config.setDataSourceClassName(environment.getRequiredProperty("spring.datasource.driver-class-name"));
		config.addDataSourceProperty("url", environment.getRequiredProperty("spring.datasource.url"));
		config.addDataSourceProperty("user", environment.getRequiredProperty("spring.datasource.username"));
		config.addDataSourceProperty("password", environment.getRequiredProperty("spring.datasource.password"));
		return new HikariDataSource(config);
	}

	@Bean
	public FilterRegistrationBean loginSessionFilter()
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new CORSFilter());
		filterRegistrationBean.setEnabled(true);
		filterRegistrationBean.setOrder(1);
		return filterRegistrationBean;
	}



	@Bean
	public ViewResolver getViewResolver()
	{
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/jsp/");
		resolver.setSuffix(".jsp");
		return resolver;
	}

}
