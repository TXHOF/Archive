package com.txhof.archive.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;


@EnableWebSecurity
public class SecurityConfiguration {

    @Configuration
    @Order(1)                                                        
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.httpBasic().disable();
            http.authorizeRequests()
                .antMatchers("/search*", "/vrl*", "/files/*", "/images/*")
                .permitAll().and()
                .authorizeRequests().anyRequest().authenticated();
            http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.NEVER);
        }
    }
    
    // @Configuration
    // @Order(2)
    // public static class AngularResourcesWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {
    //     protected void configure(HttpSecurity http) throws Exception {
    //         http.antMatcher("/images/*").antMatcher("/files/*")                            
    //             .authorizeRequests()
    //             .anyRequest()
    //             .permitAll();
    //     }
    // }
    
    // @Configuration     
    // @Order(3)  
    // public static class FormLoginWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
  
    //     @Override
    //     protected void configure(HttpSecurity http) throws Exception {
    //         http.antMatcher("/*")                             
    //             .authorizeRequests()
    //             .anyRequest()
    //             .permitAll();
    //     };
    // }
    

    
    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     http.authorizeRequests().antMatchers("/*", "/api/*", "/assets/images/*").permitAll()
    //         .anyRequest().authenticated()
    //         .and()
    //         .formLogin() //this is sort of broken right now. i don't really need formLogin i need something else.
    //         .loginPage("/secure.html") //i had index.html here as a hack.
    //         .permitAll()
    //         .and()
    //         .logout()
    //         .permitAll();
    // }

    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
        .withUser("user").password("password").roles("USER");
    }
}