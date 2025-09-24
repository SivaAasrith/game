package com.gamingportal.gamingportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class GamingPortalBackendApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(GamingPortalBackendApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(GamingPortalBackendApplication.class, args);
    }
}
