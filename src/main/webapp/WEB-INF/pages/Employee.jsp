<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>List Of Employees</title>
 		<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/style.css" />">
 		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 		<script src="<c:url value="/resources/js/main.js" />"></script>
	</head>
	<body>
		<div class="wrpr">
			<div class="header">
				<header>
	    			<img class="img-responsive" id="Logo" src="<c:url value="/resources/images/span.jpg" />" alt="Logo">
	  			</header>
	  		</div>
	  		<div class="Container">
				<div id="employeeDiv">
				<p class="TableHeader">List of Employees</p>
					<table border="1" style="width:100%" id="tblData">
	 					<tr>
						    <th>Name</th>		
						    <th>Age</th>
						    <th>Employee Number</th>
						    <th>Gender</th>
						    <th>Manager Name</th>
						    <th>Designation</th>
						    <th>Delete Employee</th>
						    <th>Edit Employee</th>
	    				</tr>
					</table>
					<button type="button" id="btnadd">&#9769; Add New Employee</button>
				</div>
				
	<!-- Alert box -->
				<div class="Notify" style="display:none" >
					<p id="DeleteHeader">Delete Entry?</p>
					<p>Are you sure you want to delete this entry?</p>
					<input type="button" value="No" id="DeleteNo">
					<input type="button" value="Yes" id="DeleteYes">
				</div>
	
	<!-- Register new employee -->
				<div id="registerEmployee" style="display:none" >
				<p class="TableHeader">Add new Employee</p>
					<table  id="vinform" >
						<tr>
						    <td><b>Employee Name</b></td>
						    <td><input type="text" class="EmpName"></td>
						</tr>
						<tr>
						    <td><b>Employee age</b></td>
						    <td><input type="text" class="EmpAge"></td>
						</tr>
						<tr>
						    <td><b>Employee Number</b></td>
						    <td><b><input type="text" class="EmpNo"></b></td>
						</tr>
						<tr>
					    	<td><b>Gender</b></td>
					   	 	<td><input type="radio" name="sex" value="Male" class="EmpGender">Male
								<input type="radio" name="sex" value="Female" class="EmpGender">Female
							</td>
						</tr>
						<tr>
						    <td><b>Manager</b></td>
						    <td><b><input type="text" class="EmpManager"></b></td>
						</tr>
						<tr>
						    <td><b>Designation</b></td>
						    <td><b><input type="text" class="EmpDesgntn"></b></td>
						</tr>
					</table>
					<button type="button" id="registerEmp">Add Employee</button>
					<button type="button" class="cancelregisterEmp">Cancel</button>
				</div>
	
	<!-- Edit Employee -->
				<div class="editEmployee" style="display:none" >
				<p class="TableHeader">Edit Employee</p>
					<table id="EditTable">
						<tr>
						    <td><b>Employee Name</b></td>
						    <td><input type="text" id='editEmpName' class="EmpName"></td>
						</tr>
						<tr>
						    <td><b>Employee age</b></td>
						    <td ><input type="text" id='age' class="EmpAge"></td>
						</tr>
						<tr>
						    <td><b>Employee Number</b></td>
						    <td ><b><input type="text" id='editEmpNumber' class="EmpNo"></b></td>
						</tr>
						<tr>
						    <td><b>Gender</b></td>
						    <td ><input type="radio" name="sex" value="Male" class="male editEmpGender">Male
								<input type="radio" name="sex" value="Female" class="female editEmpGender">Female</td>
						</tr>
						<tr>
						    <td><b>Manager</b></td>
						    <td ><b><input type="text"  id='editManager' class="EmpManager"></b></td>
						</tr>
						<tr>
						    <td><b>Designation</b></td>
						    <td ><b><input type="text"  id='editDesignation' class="EmpDesgntn"></b></td>
						</tr>
					</table>
					<button id="updateEmp">Update</button>
					<button type="button" class="cancelregisterEmp">Cancel</button>
				</div>
			</div><!-- container -->
			<div class="Footer">
				<footer>Copyright © 2015</footer>
     		</div>
		</div><!-- wrpr -->
	</body>
</html>