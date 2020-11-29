package com.dev.beans;

import java.util.Date;

public class Employee 
{
	private Integer Empno;
	private String EmpName;
	private String EmpJob;
	private Integer Mgr;
	private Integer HireDate;
	private Integer DeptId;
	
//	public Employee(){}
//
//	public Employee(Integer Empno, String EmpName, String EmpJob, Integer Mgr, Date HireDate, Integer DeptId) {
//		super();
//		this.Empno = Empno;
//		this.EmpName = EmpName;
//		this.EmpJob = EmpJob;
//		this.Mgr = Mgr;
//		this.HireDate = HireDate;
//		this.DeptId = DeptId;
//	}

	public Integer getEmpno() {
		return Empno;
	}

	public void setEmpno(Integer empno) {
		Empno = empno;
	}

	public String getEmpName() {
		return EmpName;
	}

	public void setEmpName(String empName) {
		EmpName = empName;
	}

	public String getEmpJob() {
		return EmpJob;
	}

	public void setEmpJob(String empJob) {
		EmpJob = empJob;
	}

	public Integer getMgr() {
		return Mgr;
	}

	public void setMgr(Integer mgr) {
		Mgr = mgr;
	}

	public Integer getHireDate() {
		return HireDate;
	}

	public void setHireDate(int hiredate) {
		HireDate = hiredate;
	}

	public Integer getDeptId() {
		return DeptId;
	}

	public void setDeptId(Integer deptId) {
		DeptId = deptId;
	}

	@Override
	public String toString() {
		return "Employee [Empno=" + Empno + ", EmpName=" + EmpName + ", EmpJob=" + EmpJob + ", Mgr=" + Mgr
				+ ", HireDate=" + HireDate + ", DeptId=" + DeptId + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
}
	
	
	
	
	
	

	