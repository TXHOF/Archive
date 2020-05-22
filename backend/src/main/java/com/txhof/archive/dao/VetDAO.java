package com.txhof.archive.dao;

import java.util.List;

import com.txhof.archive.model.Vet;

public interface VetDAO {
    
	Vet getVetById(java.util.UUID id);
	
	List<Vet> textSearch(String text);

	//boolean deletePerson(Vet vet);

	//boolean updatePerson(Vet vet);

	//boolean createPerson(Vet vet);


}