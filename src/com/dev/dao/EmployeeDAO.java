package com.dev.dao;

import java.util.List;

import com.dev.beans.Employee;

public interface EmployeeDAO 
{
	Boolean UpdateEmployee(Employee emp);
	List<Employee> getAllEmployee();

}
