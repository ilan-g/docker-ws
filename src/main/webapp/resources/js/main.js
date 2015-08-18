$(document).ready(function() {
	//Get all employees		 
	 jQuery.ajax({
         url: "http://localhost:8082/employees",
         type: "GET",
         contentType: 'application/json; charset=utf-8',
         success: function(resultData) {
        	 var employeesData=JSON.parse(JSON.stringify(resultData));
        	 var length = employeesData._embedded.employees.length;
             var txt = "";
             if(length > 0){
                 for(var i=0;i<length;i++){
                	// if(employeesData._embedded.employees[i].name && employeesData._embedded.employees[i].age && employeesData._embedded.employees[i].employeeNumber && employeesData._embedded.employees[i].gender  && employeesData._embedded.employees[i].managerName && employeesData._embedded.employees[i].designation){
                        var empNumber = employeesData._embedded.employees[i]._links.self.href;                       
                         txt += "<tr id='rowId'><td>"+employeesData._embedded.employees[i].name+"</td><td>"+employeesData._embedded.employees[i].age+"</td><td>"+employeesData._embedded.employees[i].employeeNumber+"</td><td>"+employeesData._embedded.employees[i].gender+"</td><td>"+employeesData._embedded.employees[i].managerName+"</td><td>"+employeesData._embedded.employees[i].designation+"</td><td id='empCell'><input type='button' value='Delete'></input></td><td class='editEmp' id='editemp'><input type='submit' value='Edit'></input></td></tr>";
                		 txt = txt.replace('empCell',empNumber);   
                		 txt = txt.replace('rowId',empNumber);
                    //   	 }
                 }
                 if(txt != ""){
                     $("#tblData").append(txt);
                 }
             }      	
                 },
         error : function(jqXHR, textStatus, errorThrown) {
         },
         timeout: 120000,
     });
	 

	 //display json content post
	  $("#registerEmp").click(function(){
		 $.ajax({ url: 'http://localhost:8082/employees', 
			 	  dataType: 'json', 
			 	  type: 'post', 
			 	  contentType: 'application/json', 
			 	  data: JSON.stringify( { "name": $('.EmpName').val(), "age": $('.EmpAge').val(), "employeeNumber": $('.EmpNo').val(), "gender": $('.EmpGender:checked').val(), "managerName": $('.EmpManager').val(), "designation": $('.EmpDesgntn').val() } ),
			 	  processData: false, 
			 	  success: function( data, textStatus, jQxhr ){   }, 
			 	  error: function( jqXhr, textStatus, errorThrown ){  } });
			 	  location.reload(true);
			 	  $('#employeeDiv').show();
			 	  $('#registerEmployee').hide();
			    });//.clic
	 
	 
	 //delete
	 $('table').on('click', 'input[type="button"]', function(e){
		 	var tdid = $(this).closest('td').attr('id');
		 	// table row td id & delete url value
		 	$.ajax({
		 	    url: tdid,
		 	    type: 'DELETE',
		 	    success: function(result) {
		 	     
		 	    }
		 	});
		   $(this).closest('tr').remove();
		   location.reload(true);
		});
	 
	  
	 // Add Employee
	 $('#btnadd').click(function() {
		 $('#employeeDiv').hide();
		 $('#registerEmployee').show();
		});
	 
	 //Edit employee
 $("#tblData").on("click", "td.editEmp", function(){	 
	 var delid=$(this).closest('tr').attr('id');
	 var cell1 = $(this).closest('tr').children('td:eq(0)').text(); 
	 var cell2 = $(this).closest('tr').children('td:eq(1)').text(); 
	 var cell3 = $(this).closest('tr').children('td:eq(2)').text(); 
	 var cell4 = $(this).closest('tr').children('td:eq(3)').text(); 
	 var cell5 = $(this).closest('tr').children('td:eq(4)').text(); 
	 var cell6 = $(this).closest('tr').children('td:eq(5)').text();
	 $('#btnadd').hide();
	 $('#editEmpName').val(cell1);
	 $('#age').val(cell2);
	 $('#editEmpNumber').val(cell3);
	 $('#editEmpGender').val(cell4);
	 $('#editManager').val(cell5);
	 $('#editDesignation').val(cell6);
	 $('.editEmployee').show();
	 $.ajax({
		    url: delid,
		    type: 'DELETE',
		    success: function(result) {
		     
		    }
		});
 });//.on
	 $('#updateEmp').click(function() {
	 var tid = $('.editEmp').closest('td').attr('id');
		  $.ajax({ url: 'http://localhost:8082/employees', 
	 	  dataType: 'json', 
	 	  type: 'post', 
	 	  contentType: 'application/json', 
	 	  data: JSON.stringify( { "name": $('#editEmpName').val(), "age": $('#age').val(), "employeeNumber": $('#editEmpNumber').val(), "gender": $('#editEmpGender').val(), "managerName": $('#editManager').val(), "designation": $('#editDesignation').val() } ),
	 	  processData: false, 
	 	  success: function( data, textStatus, jQxhr ){   }, 
	 	  error: function( jqXhr, textStatus, errorThrown ){  } });
		  location.reload(true);
		 
//$(this).closest('tr').remove();
location.reload(true);
 });

 
 
 //Validation for Digits
 $('.EmpNo,.EmpAge').keyup(function() {
	    $('span.error-keyup-1').hide();
	    var inputVal = $(this).val();
	    var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
	    if(!numericReg.test(inputVal)) {
	        $(this).after('<span class="error error-keyup-1">Numeric characters only.</span>');
	    }
	});
 $('.EmpAge').keyup(function() {
	    $('span.error-two-digit').hide();
	    var inputValTwodigit = $(this).val();
	    var twodigitreg = /^[0-9]{2}$/;
	    if(!twodigitreg.test(inputValTwodigit)) {
	        $(this).after('<span class="error error-keyup-1">Please Enter Valid Age.</span>');
	    }
	});
 
 //Validation for not null
 $('.EmpName,.EmpAge,.EmpNo,.EmpGender,.EmpManager').blur(function()          
		 {        
	 		$('span.err').hide();
		     if( !$(this).val() ) {                      //if it is blank. 
		    	 $(this).after('<span class="err">Can not be Empty.</span>');  
		     }
		 });
 
 
	 $('#registerEmp').prop('disabled', true);
	 $('.EmpName.EmpAge.EmpNo.EmpGender.EmpManager,.EmpDesgntn').keyup(function() {
	    if($(this).val() != '') {
	       $('#registerEmp').prop('disabled', false);
	    }
	 });
	 $('#updateEmp').prop('disabled', true);
	 $('.EmpName,.EmpAge,.EmpNo,.EmpManager,.EmpDesgntn').mouseup(function() {
	    if($(this).val() != '') {
	       $('#updateEmp').prop('disabled', false);
	    }
	 });
 
 });//.ready

            	