package com.span.domain;

import static org.junit.Assert.*;

import com.span.domain.Employee;

import org.junit.Test;

public class EmployeeTest {

	private static final int AGE = 23;
	private static final String NAME = "ilan";

	@Test
	public void testGetAge() {
		Employee emp =  new Employee();
		emp.setAge(AGE);
		org.junit.Assert.assertEquals("failure - Age not equal", emp.getAge(), AGE);
		// fail("Not yet implemented");
	}
	
	@Test
	public void testGetName() {
		Employee emp =  new Employee();
		emp.setName(NAME);;
		org.junit.Assert.assertEquals("failure - Age not equal", emp.getName(), NAME);
	}
	
	@Test
	public void testGetDesignation() {
		Employee emp =  new Employee();
		emp.setDesignation("SA");;;
		org.junit.Assert.assertEquals("failure - Age not equal", emp.getDesignation(), "SA");
	}
	

}
