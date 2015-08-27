package com.span.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * User: Ilan
 * Date: 02/15/2015
 */
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // id
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private int age;    
    
    @Column(nullable = false)
    private String employeeNumber;  
    
    @Column(nullable = false)
    private String gender; 
    
    @Column(nullable = true)
    private String designation; 
    
//    @Column(nullable = false)
//    private String managerName;
    	

	

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String value) {
        this.name = value;
    }
    
    public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmployeeNumber() {
		return employeeNumber;
	}

	public void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

//	public String getManagerName() {
//		return managerName;
//	}
//
//	public void setManagerName(String managerName) {
//		this.managerName = managerName;
//	}
	
	
	
	
}
