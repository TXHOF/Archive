package com.txhof.archive.model;

public class Vet {
    private java.util.UUID uid;
    private String firstName;
    private String lastName;
    private String serviceNumber;
    private String rank;
    private String branch;
    private String militaryInfo;
    private String deployments;
    private String bio;
    private String bioExtended;
    private String primaryImage;
    private String otherImages;
    private String additionalLinks;
    private String deceased;
    private String deathDate;
    private String deathLocation;
    private String internmentLocation;
    private String internmentGeo; //TODO: deal with point data type.

    public java.util.UUID getUid() {
        return uid;
    }

    public String getInternmentGeo() {
        return internmentGeo;
    }

    public void setInternmentGeo(String internmentGeo) {
        this.internmentGeo = internmentGeo;
    }

    public String getInternmentLocation() {
        return internmentLocation;
    }

    public void setInternmentLocation(String internmentLocation) {
        this.internmentLocation = internmentLocation;
    }

    public String getDeathLocation() {
        return deathLocation;
    }

    public void setDeathLocation(String deathLocation) {
        this.deathLocation = deathLocation;
    }

    public String getDeathDate() {
        return deathDate;
    }

    public void setDeathDate(String deathDate) {
        this.deathDate = deathDate;
    }

    public String getDeceased() {
        return deceased;
    }

    public void setDeceased(String deceased) {
        this.deceased = deceased;
    }

    public String getAdditionalLinks() {
        return additionalLinks;
    }

    public void setAdditionalLinks(String additionalLinks) {
        this.additionalLinks = additionalLinks;
    }

    public String getOtherImages() {
        return otherImages;
    }

    public void setOtherImages(String otherImages) {
        this.otherImages = otherImages;
    }

    public String getPrimaryImage() {
        return primaryImage;
    }

    public void setPrimaryImage(String primaryImage) {
        this.primaryImage = primaryImage;
    }

    public String getBioExtended() {
        return bioExtended;
    }

    public void setBioExtended(String bioExtended) {
        this.bioExtended = bioExtended;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getDeployments() {
        return deployments;
    }

    public void setDeployments(String deployments) {
        this.deployments = deployments;
    }

    public String getMilitaryInfo() {
        return militaryInfo;
    }

    public void setMilitaryInfo(String militaryInfo) {
        this.militaryInfo = militaryInfo;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getServiceNumber() {
        return serviceNumber;
    }

    public void setServiceNumber(String serviceNumber) {
        this.serviceNumber = serviceNumber;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setUid(java.util.UUID uid) {
        this.uid = uid;
    }

    
    @Override
	public String toString() {
		return "Vet{" + "uid=\'" + uid.toString() + "\'" +
        " firstName=\'" + firstName + "\'" +
        " lastName=\'" + lastName + "\'" +
        " serviceNumber=\'" + serviceNumber + "\'" +
        " rank=\'" + rank + "\'" +
        " branch=\'" + branch + "\'" +
        " militaryInfo=\'" + militaryInfo + "\'" +
        " deployments=\'" + deployments + "\'" +
        " bio=\'" + bio + "\'" +
        " bioExtended=\'" + bioExtended + "\'" +
        " primaryImage=\'" + primaryImage + "\'" +
        " otherImages=\'" + otherImages + "\'" +
        " additionalLinks=\'" + additionalLinks + "\'" +
        " deceased=\'" + deceased + "\'" +
        " deathDate=\'" + deathDate + "\'" +
        " deathLocation=\'" + deathLocation + "\'" +
        " internmentLocation=\'" + internmentLocation + "\'" +
        " internmentGeo=\'" + internmentGeo + "\'}";
	}
    // uid uuid DEFAULT uuid_generate_v1(),
    // firstName TEXT,
    // lastName TEXT,
    // serviceNumber TEXT,
    // rank TEXT,
    // branch TEXT,
    // militaryInfo TEXT,
    // deployments TEXT,
    // bio TEXT,
    // bioExtended bytea,
    // primaryImage TEXT,
    // otherImages TEXT,
    // additionalLinks TEXT,
    // deceased boolean,
    // deathDate TEXT,
    // deathLocation TEXT, 
    // internmentLocation TEXT,
    // internmentGeo point
}