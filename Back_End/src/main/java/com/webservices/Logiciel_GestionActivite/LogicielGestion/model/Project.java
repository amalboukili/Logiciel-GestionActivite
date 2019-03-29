package com.webservices.Logiciel_GestionActivite.LogicielGestion.model;

public class Project {
	private String clientId;
	private String contratType;
	private String name;
	private String designation;
	private String numPoint;
	private int n;
	
	
	public int getN() {
		return n;
	}

	public void setN(int n) {
		this.n = n;
	}

	public Project() {
		super();
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getContratType() {
		return contratType;
	}

	public void setContratType(String contratType) {
		this.contratType = contratType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getNumPoint() {
		return numPoint;
	}

	public void setNumPoint(String numPoint) {
		this.numPoint = numPoint;
	}

	

}
