package com.txhof.archive.service;

import java.util.ArrayList;
import java.util.List;

import com.txhof.archive.dao.VetDAO;
import com.txhof.archive.model.Vet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchService {
    
    @Autowired
    private ApplicationContext appContext;

    @GetMapping("/search")
    public @ResponseBody List<Vet> searchHandler (@RequestParam(value="searchTerms", defaultValue="") String searchTerms) {
        VetDAO vetDAO = appContext.getBean(VetDAO.class);
        if (searchTerms.equals("")){
            List<Vet> vets = new ArrayList<Vet>();
            return vets;
        }
        List<Vet> temp = new ArrayList<Vet>();
        temp.addAll(vetDAO.textSearch(searchTerms));
        return temp;
    }
}