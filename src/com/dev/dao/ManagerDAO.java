package com.dev.dao;

import java.util.List;

import com.dev.beans.Manager;


public interface ManagerDAO 
{
	  Manager Login(Integer UserId, String UserPassword);
	  List<Manager> getAllAsset();
	 // Integer Save(Manager manager);
	 
	

}
