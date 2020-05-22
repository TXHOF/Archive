package com.txhof.archive.service;

import com.txhof.archive.model.Vet;

import java.util.ArrayList;
import java.util.List;

import com.txhof.archive.dao.VetDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VrlService {

    @Autowired
    private ApplicationContext appContext;
    
    @GetMapping("/vrl")
    public @ResponseBody List<Vet> allPeopleHandler (@RequestParam(value="id", defaultValue="00000000-0000-0000-0000-000000000000") String id) {
        VetDAO vetDAO = appContext.getBean(VetDAO.class);
        if (id.equals("00000000-0000-0000-0000-000000000000")){
            List<Vet> vets = new ArrayList<Vet>();
            vets.add(new Vet()); 
            return vets; //VetDAO.getAllPersons();
        }
        List<Vet> temp = new ArrayList<Vet>();
        temp.add(vetDAO.getVetById(java.util.UUID.fromString(id)));
        return temp;
    }
    
}