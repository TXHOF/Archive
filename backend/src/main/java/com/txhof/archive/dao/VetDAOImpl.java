package com.txhof.archive.dao;

import java.util.List;

import javax.sql.DataSource;

import com.txhof.archive.model.Vet;
import com.txhof.archive.model.VetMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class VetDAOImpl implements VetDAO {
    JdbcTemplate jdbcTemplate;

	private final String SQL_FIND_VET = "select * from veterans where uid = ?";
    private final String SQL_DELETE_VET = "delete from veterans where uid = ?";
    private final String SQL_SEARCH_VET = "SELECT * FROM veterans WHERE ts_index_col @@ websearch_to_tsquery('english', ?)";
	//private final String SQL_UPDATE_VET = "update veterans set firstName = ?, lastName = ?, serviceNumber = ?, rank = ?, branch = ?, militaryInfo = ?, deployments = ?, bio = ?, bioExtended = ?, primaryImage = ?, otherImages = ?, additionalLinks = ?, deceased = ?, deathDate = ?, deathLocation = ?, internmentLocation = ?, internmentGeo = ? where uid = ?";
	// private final String SQL_GET_ALL = "select * from veterans";
	// private final String SQL_INSERT_VET = "insert into people(firstName, lastName, serviceNumber, rank, branch, militaryInfo, deployments, bio, bioExtended, primaryImage, otherImages, additionalLinks, deceased, deathDate, deathLocation, internmentLocation, internmentGeo) values (?,?,MD5('?'),?,?,?,?,?,?,?,?,?,?,?,?)";

    @Autowired
	public VetDAOImpl(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

    public Vet getVetById(java.util.UUID uid){
        return jdbcTemplate.queryForObject(SQL_FIND_VET, new Object[] { uid }, new VetMapper());
    }

    //TODO: TEST deleteVet
	public boolean deleteVet(Vet vet){
        return jdbcTemplate.update(SQL_DELETE_VET, vet.getUid()) > 0;
    }
    
    public List<Vet> textSearch(String text) {
        return jdbcTemplate.query(SQL_SEARCH_VET, new Object [] {text}, new VetMapper());
    }


    //TODO: come up with a different way to update person because of service numbers.
	// public boolean updatePerson(Vet vet){
    //     return jdbcTemplate.update(
    //         SQL_UPDATE_PERSON, vet.getFirstName(), vet.getLastName(), vet.getAge(), vet.getId()
    //         ) > 0;
    // }
    //TODO: come up with a different way to do this create person thing.
	// public boolean createPerson(Vet vet){
    //     return jdbcTemplate.update(SQL_INSERT_VET, vet.getFirstName(), vet.getLastName(),
    //                     vet.getAge()) > 0;
    // }
 
}