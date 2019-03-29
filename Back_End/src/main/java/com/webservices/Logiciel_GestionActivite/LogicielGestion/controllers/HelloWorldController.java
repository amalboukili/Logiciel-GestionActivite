package com.webservices.Logiciel_GestionActivite.LogicielGestion;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
	
	//GET
		//URL - /hello-world
		//method - "Hello World"
		
		
		private static Map<Integer, Absence> absences;
		
		static {
			absences = new HashMap<Integer, Absence>(){
				{
					put(1, new Absence(1, "admin", "valid") );
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
}
