package com.txvhof.archive.gateway.service;

import java.security.Principal;
import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthService {
    
    @RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
    }
    
    //TODO: make sure the client app uses /token remove if not
    @RequestMapping("/token")
	public Map<String, String> token(HttpSession session) {
	  return Collections.singletonMap("token", session.getId());
	}

}