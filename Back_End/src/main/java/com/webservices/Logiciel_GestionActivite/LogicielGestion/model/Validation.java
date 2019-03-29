package com.webservices.Logiciel_GestionActivite.LogicielGestion.model;

public class Validation {
	private String name;
	private String token;
	private boolean success;
	
	
	public Validation() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Validation(String name, String token, boolean success) {
		super();
		this.name = name;
		this.token = token;
		this.success = success;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public boolean isSuccess() {
		return success;
	}


	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	
	

}
