package com.dev.repo;

import java.util.HashMap;
import java.util.Map;

import com.dev.beans.Manager;

public class ManagerDB 
{
	public Map<Integer, Manager> map = new HashMap<Integer, Manager>();
	
	public ManagerDB(){
	
	Manager m1 = new Manager();
	m1.setUserId(101);
	m1.setUserName("Tony");
	m1.setUserPassword("stark");
	m1.setUserType("Manager");
	map.put(m1.getUserId(), m1);
	
	Manager m2 = new Manager();
	m2.setUserId(102);
	m2.setUserName("Akanksha");
	m2.setUserPassword("Singh");
	m2.setUserType("Senior Manager");
	map.put(m2.getUserId(), m2);
	
	Manager m3 = new Manager();
	m3.setUserId(103);
	m3.setUserName("Siddhu");
	m3.setUserPassword("sidd");
	m3.setUserType("Manager");
	map.put(m3.getUserId(), m3);

	}
	

}
