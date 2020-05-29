package com.txvhof.archive.gateway.service;
//
//import org.springframework.boot.autoconfigure.web.servlet.error;
//import org.springframework.boot.web.servlet.error;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;


@Controller
public class AngularRouteService implements ErrorController {

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}