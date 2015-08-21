$(document).ready(function() {
	//Get all employees		 
	 jQuery.ajax({
         url: "../employees",
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
                         txt += "<tr id='rowId'><td id='NameId'>"+employeesData._embedded.employees[i].name+"</td><td id='AgeId"+i+"'>"+employeesData._embedded.employees[i].age+"</td><td id='NumberId"+i+"'>"+employeesData._embedded.employees[i].employeeNumber+"</td><td id='GenderId"+i+"'>"+employeesData._embedded.employees[i].gender+"</td><td id='ManagerId"+i+"'>"+employeesData._embedded.employees[i].managerName+"</td><td id='DesignationId"+i+"'>"+employeesData._embedded.employees[i].designation+"</td><td id='empCell'><input type='button' value='&#9874; Delete' class='Button'></input></td><td class='editEmp' id='editemp'><input type='submit' value='&#9776; Edit' class='Button'></input></td></tr>";
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
		 $.ajax({ url: '../employees', 
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
	 $('table').on('click', 'input[type="button"]', function(){
		var tdid = $(this).closest('td').attr('id');
		$('.Notify').show();
		$("#DeleteYes").click(function(){
			$('.Notify').hide(); 	
				 	// table row td id & delete url value
				 	$.ajax({
				 	    url: tdid,
				 	    type: 'DELETE',
				 	    success: function(result) {
				 	     
				 	    }
				 	});
				location.reload(true);
				});
		});
	 $("#DeleteNo").click(function(){
		 $('.Notify').hide();
		 location.reload(true);
	 });
	  
	 // Add Employee
	 $('#btnadd').click(function() {
		 $('#employeeDiv').hide();
		 $('#registerEmployee').show();
		});
	 
	 //Edit employee
 $("#tblData").on("click", "td.editEmp", function(event){	
	 event.preventDefault();
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
	 $('#editManager').val(cell5);
	 $('#editDesignation').val(cell6);
	 $('.editEmployee').show();
	 if(cell4=="Female"){$('.female').prop('checked', true);}
	 else{$('.male').prop('checked', true);}
	 $.ajax({
		    url: delid,
		    type: 'DELETE',
		    success: function(result) {
		     
		    }
		});
 });//.on
	 $('#updateEmp').click(function(event) {
		 event.preventDefault();
	 var tid = $('.editEmp').closest('td').attr('id');
		  $.ajax({
		  url: '../employees', 
	 	  dataType: 'json', 
	 	  type: 'post', 
	 	  contentType: 'application/json', 
	 	  data: JSON.stringify( { "name": $('#editEmpName').val(), "age": $('#age').val(), "employeeNumber": $('#editEmpNumber').val(), "gender": $('.editEmpGender:checked').val(), "managerName": $('#editManager').val(), "designation": $('#editDesignation').val() } ),
	 	  processData: false, 
	 	  success: function( data, textStatus, jQxhr ){  }, 
	 	  error: function( jqXhr, textStatus, errorThrown ){  } });
		  location.reload(true);
		 
//$(this).closest('tr').remove();
location.reload(true);
 });

 
 
 //Validation for Digit
 $('.EmpNo,.EmpAge').keyup(function() {
	    $('span.error-keyup-1').hide();
	    var inputVal = $(this).val();
	    var numericRegErr = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
	    if(!numericRegErr.test(inputVal)) {
	        $(this).after('<span class="error error-keyup-1">&#9888; Numeric characters only.</span>');
	    }
	});
 $('.EmpAge').keyup(function() {
	    $('span.error-two-digit').hide();
	    var inputValTwodigit = $(this).val();
	    var twodigitreg = /^[0-9]{2}$/;
	    if(!twodigitreg.test(inputValTwodigit)) {
	        $(this).after('<span class="error error-keyup-1">&#9888; Please Enter Valid Age.</span>');
	    }
	});
 
 //Validation for not null
 $('.EmpName,.EmpAge,.EmpNo,.EmpGender,.EmpManager').blur(function()          
		 {        
	 		$('span.err').hide();
		     if( !$(this).val() ) {                      //if it is blank. 
		    	 $(this).after('<span class="err">&#9888; Can not be Empty.</span>');  
		     }
		 });
	 
 	//Validation While Adding new Employee
	 $("#registerEmp").attr('disabled', 'disabled');
	 $("#vinform").keyup(function() {
		 $("#registerEmp").attr('disabled', 'disabled');
		 var CheckName = $(".EmpName").val();
		 var CheckAge = $(".EmpAge").val();
		 var CheckEno = $(".EmpNo").val();
		 var CheckGender = $(".EmpGender:checked").val();
		 var CheckManager = $(".EmpManager").val();
		 var numericRegDsbl = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
		 if (!(CheckName == "" || CheckAge == "" || CheckEno == ""|| CheckGender == "" || CheckManager == "" )) {
			 if ((numericRegDsbl.test(CheckAge))&&(numericRegDsbl.test(CheckEno))) {
				 $("#registerEmp").removeAttr('disabled');
			 }
		 }
	 });
	 
	 
	//Validation While Editing Employee
	 $("#updateEmp").attr('disabled', 'disabled');
	 $("#EditTable").on('change mousedown keyup',function() {
		 $("#updateEmp").attr('disabled', 'disabled');
		var CheckEditedName= $('#editEmpName').val();
		var CheckEditedAge = $('#age').val();
		var CheckEditedEno = $('#editEmpNumber').val();
		var CheckEditedGender = $('.editEmpGender:checked').val();
		var CheckEditedManager = $('#editManager').val();
		//var CheckEditedDsgntn = $('#editDesignation').val();
		var numericRegEdit = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
		if (!(CheckEditedName == "" || CheckEditedAge == "" || CheckEditedEno == ""|| CheckEditedGender == "" || CheckEditedManager == "")) {
			 if ((numericRegEdit.test(CheckEditedAge))&&(numericRegEdit.test(CheckEditedEno))) {
				 $("#updateEmp").removeAttr('disabled');
			 }
		}
	});
	 
	 window.onresize=load;
	 window.onload=load;
	 function load()
	 {
		 var InnerHeight=window.innerHeight;
		 var HeaderSecletor=document.querySelector(".header");
		 var Headeroffsetheight=HeaderSecletor.offsetHeight;
		 var FooterSecletor=document.querySelector(".Footer");
	 	var Footeroffsetheight=FooterSecletor.offsetHeight;
	 	var ContainerSelector=document.querySelector(".Container");
	 	ContainerSelector.style.height=InnerHeight-(Headeroffsetheight+Footeroffsetheight);
	 }
	 
 
 });//.ready

            	