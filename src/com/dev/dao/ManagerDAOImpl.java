package com.dev.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.dev.beans.Manager;
import com.dev.repo.ManagerDB;

public class ManagerDAOImpl implements ManagerDAO
{
	
	private static ManagerDB repo = new ManagerDB();

	@Override
	public Manager Login(Integer UserId, String UserPassword) {
		Manager m = (Manager) repo.map.get(UserId);
		if(m!=null){
			if(m.getUserPassword().equals(UserPassword)){
				return m;
			}else{
				return null;
			}
		}
			else{
				return null;
			}
		}

	@Override
	public List<Manager> getAllAsset() {
		Collection<Manager> manager=repo.map.values(); //it return a collection view of the values stored in map
		ArrayList<Manager> mang=new ArrayList<Manager>(manager);
		return mang;
	}
	

}
