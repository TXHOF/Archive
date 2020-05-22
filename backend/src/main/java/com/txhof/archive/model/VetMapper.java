package com.txhof.archive.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


public class VetMapper implements RowMapper<Vet>  {
    public Vet mapRow(ResultSet resultSet, int i) throws SQLException {

		Vet veteran = new Vet();
		veteran.setUid((java.util.UUID) resultSet.getObject("uid"));          //  .getString("uid"));   
		veteran.setFirstName(resultSet.getString("firstName"));
		veteran.setLastName(resultSet.getString("lastName"));
		veteran.setServiceNumber(resultSet.getString("serviceNumber"));
        veteran.setRank(resultSet.getString("rank"));
        veteran.setBranch(resultSet.getString("branch"));
        veteran.setMilitaryInfo(resultSet.getString("militaryInfo"));
        veteran.setDeployments(resultSet.getString("deployments"));
        veteran.setBio(resultSet.getString("bio"));
        veteran.setBioExtended(resultSet.getString("bioExtended"));
        veteran.setPrimaryImage(resultSet.getString("primaryImage"));
        veteran.setOtherImages(resultSet.getString("otherImages"));
        veteran.setAdditionalLinks(resultSet.getString("additionalLinks"));
        veteran.setDeceased(resultSet.getString("deceased"));
        veteran.setDeathDate(resultSet.getString("deathDate"));
        veteran.setDeathLocation(resultSet.getString("deathLocation"));
        veteran.setInternmentLocation(resultSet.getString("internmentLocation"));
        veteran.setInternmentGeo(resultSet.getString("internmentGeo"));

        return veteran;
	}
}