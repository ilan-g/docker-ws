<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List Of Employees</title>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 <script src="<c:url value="/resources/js/main.js" />"></script>
</head>
<body>
<div id="employeeDiv">
<table class="employee-table-class" border="1" style="width:100%" id="tblData">
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
<button id="btnadd">Add New Employee</button>
</div>
<!-- <form method="GET" action="/addemployee">
<button id="btnadd">Add New Employee</button>
</form> -->

<div id="registerEmployee" style="display:none" >
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
<button id="registerEmp">Add Employee</button>
</div>

<!-- Edit Employee -->
<div class="editEmployee" style="display:none" >
<table>
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
    <td ><b><input type="text" id='editEmpGender' class="EmpGender"></b></td>
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
</div>

</body>
</html>