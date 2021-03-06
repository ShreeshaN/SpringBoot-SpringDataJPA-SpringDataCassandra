package com.sample.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.cassandra.config.CassandraClusterFactoryBean;
import org.springframework.data.cassandra.config.java.AbstractCassandraConfiguration;
import org.springframework.data.cassandra.mapping.BasicCassandraMappingContext;
import org.springframework.data.cassandra.mapping.CassandraMappingContext;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

@Configuration
@PropertySource(value = { "classpath:cassandra.properties" })
/*@EnableCassandraRepositories(basePackages="com.sarvint.cassandra.domain")
*/@ComponentScan("com.sarvint.cassandra.domain")
public class CassandraConfig extends AbstractCassandraConfiguration {

    private static final Logger LOG = LoggerFactory.getLogger(CassandraConfig.class);


    @Autowired
    private Environment environment;

    @Bean
    public CassandraClusterFactoryBean cluster() {
    	LOG.info("INSIDE cluster()");
        CassandraClusterFactoryBean cluster = new CassandraClusterFactoryBean();
        cluster.setContactPoints(environment.getProperty("cassandra.contactpoints"));
        cluster.setPort(Integer.parseInt(environment.getProperty("cassandra.port")));
        return cluster;
    }

    @Override
    protected String getKeyspaceName() {
    	LOG.info("INSIDE getting keyspace name");
        return environment.getProperty("cassandra.keyspace");
    }

    @Bean
    public CassandraMappingContext cassandraMapping() throws ClassNotFoundException {
    	LOG.info("INSIDE cassandra mapping");
        return new BasicCassandraMappingContext();
    }
}
