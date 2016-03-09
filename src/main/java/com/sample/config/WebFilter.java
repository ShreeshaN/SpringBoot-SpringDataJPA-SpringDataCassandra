package com.sarvint.config;

import java.util.HashMap;
import java.util.Map;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebFilter {

    String urls = "/user/mail,/user/testRawData,/user/testBioData,/user/saveUser,/user/saveUserProfile,/user/getUserProfile/,/user/login,/user/lookup,/user/setLookup,/user/saveWorkoutTrend,/user/getWorkoutForBpId/,/,/login,/jsp/index.jsp,/user/saveCoeff";

    @Bean
    public FilterRegistrationBean loginSessionFilter()
    {
        Map<String, String> filterInitParameters = new HashMap<String, String>();
        filterInitParameters.put("avoid-urls", urls);
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(new SessionFilter());
        filterRegistrationBean.setEnabled(true);
        filterRegistrationBean.setInitParameters(filterInitParameters);
        return filterRegistrationBean;
    }
}
