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
                	 if(employeesData._embedded.employees[i].name && employeesData._embedded.employees[i].age && employeesData._embedded.employees[i].employeeNumber && employeesData._embedded.employees[i].gender  && employeesData._embedded.employees[i].managerName && employeesData._embedded.employees[i].designation){
                        var empNumber = employeesData._embedded.employees[i]._links.self.href;                       
                         txt += "<tr id='rowId'><td>"+employeesData._embedded.employees[i].name+"</td><td>"+employeesData._embedded.employees[i].age+"</td><td>"+employeesData._embedded.employees[i].employeeNumber+"</td><td>"+employeesData._embedded.employees[i].gender+"</td><td>"+employeesData._embedded.employees[i].managerName+"</td><td>"+employeesData._embedded.employees[i].designation+"</td><td id='empCell'><input type='button' value='Delete'></input></td><td class='editEmp' id='editemp'><input type='submit' value='Edit'></input></td></tr>";
                		 txt = txt.replace('empCell',empNumber);   
                		 txt = txt.replace('rowId',empNumber);
                       	 }
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
			 	  data: JSON.stringify( { "name": $('.a1').val(), "age": $('.a2').val(), "employeeNumber": $('.a3').val(), "gender": $('.a4').val(), "managerName": $('.a5').val(), "designation": $('.a6').val() } ),
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
	 $('#editDesignation').val(cell5);
	 $('#editManager').val(cell6);
	 $('.editEmployee').show();
	 $('#updateEmp').click(function() {
	 var tid = $('.editEmp').closest('td').attr('id');
		  $.ajax({ url: 'http://localhost:8082/employees', 
	 	  dataType: 'json', 
	 	  type: 'post', 
	 	  contentType: 'application/json', 
	 	  data: JSON.stringify( { "name": $('#editEmpName').val(), "age": $('#age').val(), "employeeNumber": $('#editEmpNumber').val(), "gender": $('#editEmpGender').val(), "managerName": $('#editDesignation').val(), "designation": $('#editManager').val() } ),
	 	  processData: false, 
	 	  success: function( data, textStatus, jQxhr ){   }, 
	 	  error: function( jqXhr, textStatus, errorThrown ){  } });
		  location.reload(true);
		  $.ajax({
	    url: delid,
	    type: 'DELETE',
	    success: function(result) {
	     
	    }
	});
//$(this).closest('tr').remove();
location.reload(true);
 });
 });//.on
 
 $('.a3,.a2').keyup(function() {
	    $('span.error-keyup-1').hide();
	    var inputVal = $(this).val();
	    var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
	    if(!numericReg.test(inputVal)) {
	        $(this).after('<div class="error error-keyup-1">Numeric characters only.</div>');
	    }
	});
 
 
 });//.ready

            	