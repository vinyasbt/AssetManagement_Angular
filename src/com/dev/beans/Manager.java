package com.dev.beans;

public class Manager 
{
	 private Integer UserId;
	 private String UserName;
	 private String UserPassword;
	 private String UserType;
//	 public Manager(){}
//	 public Manager(String UserId, String UserName, String UserPassword, String Usertype, String UserType)
//	 {
//		 super();
//		 this.UserId = UserId;
//		 this.UserName = UserName;
//		 this.UserPassword = UserPassword;
//		 this.UserType = UserType;
//	 }
	public Integer getUserId() {
		return UserId;
	}
	public void setUserId(Integer userId) {
		UserId = userId;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getUserPassword() {
		return UserPassword;
	}
	public void setUserPassword(String userPassword) {
		UserPassword = userPassword;
	}
	public String getUserType() {
		return UserType;
	}
	public void setUserType(String userType) {
		UserType = userType;
	}
	@Override
	public String toString() {
		return "Manager [UserId=" + UserId + ", UserName=" + UserName + ", UserPassword=" + UserPassword + ", UserType="
				+ UserType + "]";
	}
	
	

}
