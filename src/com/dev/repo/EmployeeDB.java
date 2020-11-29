package com.dev.repo;

import java.util.HashMap;
import java.util.Map;

import com.dev.beans.Employee;
public class EmployeeDB 
{
	public Map<Integer, Employee> map = new HashMap<Integer, Employee>();
	
	public EmployeeDB() 
	{
		Employee e1 = new Employee();
		e1.setEmpno(10);
		e1.setEmpName("Smith");
		e1.setEmpJob("Clerk");
		e1.setMgr(30);
		e1.setHireDate(12-12-2018);
		e1.setDeptId(102);
		map.put(e1.getEmpno(),e1);
		
		Employee e2 = new Employee();
		e2.setEmpno(20);
		e2.setEmpName("Miller");
		e2.setEmpJob("Salesman");
		e2.setMgr(30);
		e2.setHireDate(01-9-2018);
		e2.setDeptId(103);
		map.put(e2.getEmpno(),e2);
		
		Employee e3 = new Employee();
		e3.setEmpno(30);
		e3.setEmpName("Ward");
		e3.setEmpJob("Manager");
		e3.setMgr(50);
		e3.setHireDate(12-6-2018);
		e3.setDeptId(102);
		map.put(e3.getEmpno(),e3);
		
		Employee e4 = new Employee();
		e4.setEmpno(40);
		e4.setEmpName("Jones");
		e4.setEmpJob("Clerk");
		e4.setMgr(50);
		e4.setHireDate(12-12-2018);
		e4.setDeptId(102);
		map.put(e4.getEmpno(),e4);
		
		Employee e5 = new Employee();
		e5.setEmpno(50);
		e5.setEmpName("Martin");
		e5.setEmpJob("Analyst");
		e5.setMgr(30);
		e5.setHireDate(12-04-2018);
		e5.setDeptId(102);
		map.put(e5.getEmpno(),e5);
		
		Employee e6 = new Employee();
		e6.setEmpno(10);
		e6.setEmpName("Ford");
		e6.setEmpJob("Clerk");
		e6.setMgr(50);
		e6.setHireDate(12-12-2018);
		e6.setDeptId(102);
		map.put(e6.getEmpno(),e6);
		
		
	}
	

}
