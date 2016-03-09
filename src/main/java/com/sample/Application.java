
package com.sample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.sarvint.config.CassandraConfig;
import com.utils.config.GenericRepositoryFactoryBean;

@SpringBootApplication
@EnableJpaRepositories( repositoryFactoryBeanClass = GenericRepositoryFactoryBean.class )
@Import(CassandraConfig.class)
public class Application {

	public static void main( String[] args ) throws Exception
	{
		SpringApplication.run(Application.class, args);
	}

}
