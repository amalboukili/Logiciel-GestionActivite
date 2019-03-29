package com.webservices.Logiciel_GestionActivite.LogicielGestion.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webservices.Logiciel_GestionActivite.LogicielGestion.model.Absence;
import com.webservices.Logiciel_GestionActivite.LogicielGestion.model.Project;
import com.webservices.Logiciel_GestionActivite.LogicielGestion.model.User;
import com.webservices.Logiciel_GestionActivite.LogicielGestion.model.Validation;
import com.webservices.Logiciel_GestionActivite.LogicielGestion.model.Frais;
@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class HelloWorldController {
	
	
	
	//GET
		//URL - /hello-world
		//method - "Hello World"
		
		
		private static Map<Integer, Absence> absences;
		private static Map<Integer, User> users;
		private static Map<Integer, User> logins;
		private List<Project> project = createList();
		private List<Frais> frais = createListFrais();
		
		private static List<Project> createList() {
			List<Project> tempProjects = new ArrayList<>();
						
			Project proj1 = new Project();
			proj1.setNumPoint("OnePoint");
			proj1.setDesignation("BNP");
			proj1.setClientId("112");
			proj1.setContratType("Régie");
			proj1.setName("R.LAYANI David");
			
			
			Project proj2 = new Project();
			proj2.setNumPoint("OnePoint");
			proj2.setDesignation("BNP");
			proj2.setClientId("33");
			proj2.setContratType("Régie");
			proj2.setName("R.LAYANI David");

			tempProjects.add(proj1);
			tempProjects.add(proj2);
			
			return tempProjects;
		}

		
		private static List<Frais> createListFrais() {
			List<Frais> mesFrais = new ArrayList<>();
			
			Frais frais1 = new Frais();
			frais1.setPeriode("Décembre 2018");
			frais1.setPaye("Oui");
			frais1.setValidation("en-cours");
			
			Frais frais2= new Frais();
			frais2.setPeriode("Janvier 2018");
			frais2.setPaye("Non");
			frais2.setValidation("validé");
			
			Frais frais3= new Frais();
			frais3.setPeriode("Mars 2018");
			frais3.setPaye("");
			frais3.setValidation("non-validé");
			
			mesFrais.add(frais1);
			mesFrais.add(frais2);
			mesFrais.add(frais3);
			
			return mesFrais;
		}


		static {
			absences = new HashMap<Integer, Absence>(){
				{
					put(1, new Absence(1, "admin", "valid") );
				}
			};
			
			logins = new HashMap<Integer, User>(){
				{
				put(1, new User("boukili.amal@gmail.com", "coucou1") );
				}
			};
			
			users = new HashMap<Integer, User>(){
				{
				put(1, new User("amal", "boukili.amal@gmail.com", "coucou2") );
				}
			};
			
			
			
		}
		
		@RequestMapping(method=RequestMethod.GET, path="/hello-world")
		 public String helloWorld(){
			 return "Hello World";

		}
		
		@RequestMapping(method = RequestMethod.GET, path="/abs")
		public Collection<Absence> getListAbsences() {
			return this.absences.values();
			
		}
		
		@RequestMapping(method = RequestMethod.GET, path="/user")
		public Collection<User> getListUsers() {
			return this.users.values();
			
		}
		
//		@RequestMapping(method = RequestMethod.GET, path="/login")
//		public Collection<User>getListLogins() {
//			return this.logins.values();
//			
//		}
		
		@RequestMapping (method = RequestMethod.POST, path="/login1")
		public Validation valide(@RequestBody User user) {
			
			if(user.getEmail().equals("amal@amal.com") && user.getPassword().equals("amal")){
				
				return new Validation("amal", "1234567", true);
				
			}
			
			return new Validation(null, null, false);
		}
		
		@RequestMapping(value = "/projects", method = RequestMethod.GET, produces = "application/json")
		public List<Project> firstPage() {
			
			return project;
		}
		
		@RequestMapping(value = "/number", method = RequestMethod.GET)
		public int nombre() {
			int num=project.size();
			
			return num;
		}
		@DeleteMapping(path = { "/projects/{ClientId}" })
		public Project delete(@PathVariable("ClientId") String id) {
		
			Project deletedPro = null;
			for (Project pro : project) {
				if (pro.getClientId().equals(id)) {
					project.remove(pro);
					deletedPro = pro;
					break;
				}
			}
			return deletedPro;
		}

		@PostMapping
		public Project create(@RequestBody Project user) {
			project.add(user);
			System.out.println(project);
			return user;
		}
		
		@RequestMapping(value = "/frais", method = RequestMethod.GET, produces = "application/json")
		public List<Frais> fraisPage() {
			
			return frais;
			 //return frais.sort(Comparator.naturalOrder());
		}
		
		@PostMapping (path="/frais")
		public Frais createFrais(@RequestBody Frais money) {
			frais.add(money);
			System.out.println(frais);
			return money;
		}
		
		@DeleteMapping(path = { "/frais/{periode}" })
		public Frais delete1(@PathVariable("periode") String pr) {
		
			Frais deletedPrd = null;
			for (Frais prd : frais) {
				if (prd.getPeriode().equals(pr)) {
					frais.remove(prd);
					deletedPrd = prd;
					break;
				}
			}
			return deletedPrd;
		}
		
		
}
