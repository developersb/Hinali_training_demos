var column = "ID";
var order = "DESC";
var limit=5;
var page=1;
var val="";
/*if($("search").length>0)
	val=$("#search").val();*/

$(document).ready(function(){
		$(".alert")	.hide();
		data();
		$('[data-toggle="tooltip"]').tooltip();
		var checkbox = $('table tbody input[type="checkbox"]');
		$("#selectAll").click(function(){
			if(this.checked){
				checkbox.each(function(){
					this.checked = true;                        
				});
			} else{
				checkbox.each(function(){
					this.checked = false;                        
				});
			} 
		});
		checkbox.click(function(){
			if(!this.checked){
				$("#selectAll").prop("checked", false);
			}
		});

});

function data() {
	console.log("limit : " + limit);
	$.ajax({
		data: {
			page:page,
			column:column,
			order:order,
			limit: limit,
			val:val,
		},
		type: "get",
		url: "slim/api/index.php/allRecords",
		success: function (data1, status) {
            if (status == "success") {
            	//var data1 = JSON.parse(res);
            	var data=data1.task;
                markup="";
                for (var i = 0; i < data.length; ++i) {
                	markup += '<tr id="'+data[i]['ID']+'"> <td><span class="custom-checkbox"><input type="checkbox" class="user_checkbox" data-user-id="'+data[i]['ID']+'">\
                	<label for="checkbox2"></label></span></td>';
						markup += "<td id='id"+data[i]["ID"]+ "' >" + data[i]["ID"] + "</td>"; 
						markup += "<td id='fname"+data[i]['ID']+"'>" + data[i]['FirstName'] + "</td>"; 
						markup += "<td id='lname"+data[i]['ID']+"'>" + data[i]['LastName'] + "</td>"; 
						markup += "<td id='gender"+data[i]['ID']+"'>" + data[i]['Gender'] + "</td>"; 
						markup += "<td id='bdate"+data[i]['ID']+"'>" + data[i]['BirthDate'] + "</td>"; 
						markup += "<td id='city"+data[i]['ID']+"'>" + data[i]['City'] + "</td>"; 
						markup += "<td id='mno"+data[i]['ID']+"'>" + data[i]['MobileNo'] + "</td>"; 
						markup += "<td id='email"+data[i]['ID']+"'>" + data[i]['Email'] + "</td>"; 
						markup += "<td id='desi"+data[i]['ID']+"'>" + data[i]['Designation'] + "</td>"; 
						markup += "<td id='salary"+data[i]['ID']+"'>" + data[i]['Salary'] + "</td>"; 
						markup += "<td id='quali"+data[i]['ID']+"'>" + data[i]['Qualification'] + "</td>"; 
						markup += '<td id="du'+data[i]["ID"]+'"> <a href="#editEmployeeModal" class="edit" data-toggle="modal">\
										<i class="material-icons update" data-toggle="tooltip" \
										data-id='+data[i]["ID"]+'\
										data-fname='+data[i]['FirstName']+'\
										data-lname=' + data[i]['LastName'] +'\
										data-gender='+data[i]['Gender']+'\
										data-bdate='+ data[i]['BirthDate'] +'\
										data-city='+ data[i]['City'] +'\
										data-mno='+ data[i]['MobileNo'] +'\
										data-email='+ data[i]['Email'] +'\
										data-desi='+ data[i]['Designation'] +'\
										data-salary='+ data[i]['Salary'] +'\
										data-qua='+ data[i]['Qualification'] +'\
										title="Edit"></i>\
									</a>\
									<a href="#deleteEmployeeModal" class="delete" data-id="'+data[i]["ID"]+'" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" \
									 title="Delete"> </i></a></td>';
				}
                tableBody = $("table tbody");
                tableBody.empty(); 
                tableBody.append(markup);

                var count=data1.count;
                var start_from = (page-1) * limit;
                var total1=0;
                var t=(parseInt(limit)+parseInt(start_from));
                if(count > t)
					total1=t;
				else
					total1=count;

                $("#enteries").text("Showing " + (start_from+1) +" to " +total1 +" of "+count+" Entries");
                var page1="";

                var pages = Math.ceil(count / limit);
                if(page>=2){  
				    page1 += '<li class="pageitem" id="'+ (page-1) +'"><a href="JavaScript:Void(0);" class="page-link" data-id="'+ (page-1) +'">Prev</a></li> ';  
				}       
		        for(var i=1; i<=pages; i++){
					if(i == page){
						page1 += '<li class="pageitem active" id="' +i +'"><a href="JavaScript:Void(0);" data-id="'+i+'" class="page-link" >'+ i +'</a></li>';
					}
					else{
						page1 += '<li class="pageitem" id="' +i +'"><a href="JavaScript:Void(0);" data-id="'+i+'" class="page-link" >'+ i +'</a></li>';
					}
				}     
				if(page<pages){  
					page1 += '<li class="pageitem" id="' +(parseInt(page)+1)+'"><a href="JavaScript:Void(0);" class="page-link" data-id="'+ (parseInt(page)+1) +'">Next</a></li>'; 
				}   
              	document.getElementById('pagination').innerHTML = page1;
             }
        }
	});
}

$(document).ajaxComplete(function(){
	document.querySelector("#loader").style.display = "block"; 
	document.querySelector(".b1").style.disabled  = "true"; 
	document.querySelector(".b1").style.opacity  = "0.1";  
    setTimeout(function () {
    	document.querySelector("#loader").style.display = "none"; 
		document.querySelector(".b1").style.visibility = "visible"; 
		document.querySelector(".b1").style.opacity = "1"; 
	},1000);  
});

$(document).on('click','#btn-add',function(e) {
		if(ValidationForm()){
			h="";
			if ($("#mca").is(":checked")) 
				h = h + "MCA";
			if ($("#mba").is(":checked")) 
				h = h +" " +  "MBA";
			var data = $("#user_form").serialize() + "&qalification=" + h;
			$.ajax({
				data: data,
				type: "post",
				url: "slim/api/index.php/insert",
				success: function(dataResult){
					$('#addEmployeeModal').modal('hide');
					if(dataResult.statusCode==200){
						clear1();
			          	$(".table tr:last").remove();
			          	console.log("id" + dataResult.id[0]['ID']);
			         markup="";
			       markup += '<tr id="'+dataResult.id[0]['ID']+'"> <td><span class="custom-checkbox"><input type="checkbox" class="user_checkbox" data-user-id="'+dataResult.id+'">\
                	<label for="checkbox2"></label></span></td>';
						markup += "<td id='id"+dataResult.id[0]['ID']+ "' >" +dataResult.id[0]['ID']+ "</td>"; 
						markup += "<td id='fname"+dataResult.id[0]['ID']+"'>" + dataResult.method['fname'] + "</td>"; 
						markup += "<td id='lname"+dataResult.id[0]['ID']+"'>" +dataResult.method['lname'] + "</td>"; 
						markup += "<td id='gender"+dataResult.id[0]['ID']+"'>" + dataResult.method['gender'] + "</td>"; 
						markup += "<td id='bdate"+dataResult.id[0]['ID']+"'>" + dataResult.method['bdate'] + "</td>"; 
						markup += "<td id='city"+dataResult.id[0]['ID']+"'>" + dataResult.method['city'] + "</td>"; 
						markup += "<td id='mno"+dataResult.id[0]['ID']+"'>" + dataResult.method['mno'] + "</td>"; 
						markup += "<td id='email"+dataResult.id[0]['ID']+"'>" +dataResult.method['email'] + "</td>"; 
						markup += "<td id='desi"+dataResult.id[0]['ID']+"'>" +dataResult.method['desi'] + "</td>"; 
						markup += "<td id='salary"+dataResult.id[0]['ID']+"'>" + dataResult.method['salary'] + "</td>"; 
						markup += "<td id='quali"+dataResult.id[0]['ID']+"'>" + dataResult.method['quali'] + "</td>"; 
						markup += '<td id="du'+dataResult.id[0]['ID']+'"> <a href="#editEmployeeModal" class="edit" data-toggle="modal">\
										<i class="material-icons update" data-toggle="tooltip" \
										data-id='+dataResult.id[0]['ID']+'\
										data-fname='+ dataResult.method['fname']+'\
										data-lname=' + dataResult.method['lname'] +'\
										data-gender='+dataResult.method['gender']+'\
										data-bdate='+ dataResult.method['bdate'] +'\
										data-city='+ dataResult.method['city'] +'\
										data-mno='+  dataResult.method['mno']  +'\
										data-email='+ dataResult.method['email'] +'\
										data-desi='+ dataResult.method['desi'] +'\
										data-salary='+  dataResult.method['salary'] +'\
										data-qua='+ dataResult.method['quali'] +'\
										title="Edit"></i>\
									</a>\
									<a href="#deleteEmployeeModal" class="delete" data-id="'+dataResult.id[0]['ID']+'" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" \
									 title="Delete"> </i></a></td>';   	
					//$('.table tr').after(markup);
					$('table > tbody > tr').eq(0).before(markup); 
			        document.getElementById("message").innerHTML = 'Data  Inserted successfully !';
					$(".alert")	.show();
					setTimeout(function () {
						$(".alert")	.hide();
					},5000);
					}
					else if(dataResult==201){
					   alert(dataResult);
					}    
				}
			});
		}
	});

	$(document).on('click','.update',function(e) {
		var id=$(this).attr("data-id");
		var fname=$(this).attr("data-fname");
		var lname=$(this).attr("data-lname");
		var gender=$(this).attr("data-gender");
		var bdate=$(this).attr("data-bdate");
		var city=$(this).attr("data-city");
		var mno=$(this).attr("data-mno");
		var email=$(this).attr("data-email");
		var desi=$(this).attr("data-desi");
		var salary=$(this).attr("data-salary");
		var qua=$(this).attr("data-qua");
		$('#id_u').val(id);
		$('#fname_u').val(fname);
		$('#lname_u').val(lname);
		$('#bdate_u').val(bdate);
		$('#email_u').val(email);
		$('#mno_u').val(mno);
		$('#city_u').val(city);
		$('#desi_u').val(desi);
		$('#salary_u').val(salary);

		if(gender=="Male")
			$('#male_u').prop('checked','checked');
		else
			$('#female_u').prop('checked','checked');
		console.log("qua" + qua);
		 if(qua=="MCA MBA"){
	    	//console.log("qua" + qua);
			$('#mba_u').prop('checked','checked');
			$('#mca_u').prop('checked','checked');
	    }
		else if(qua==" MBA"){
			//console.log("quamba" + qua);
			$('#mba_u').prop('checked','checked');
			$('#mca_u').prop('checked',false);
	    }
	    else if(qua=="MCA"){
	    	//console.log("quamca" + qua);
			$('#mba_u').prop('checked',false);
			$('#mca_u').prop('checked','checked');
	    }
	});
	
	$(document).on('click','#update',function(e) {
		if(ValidationForm1()) {
			h="";
			if ($("#mca_u").is(":checked")) 
				h = h + $("#mca_u").val();
			if ($("#mba_u").is(":checked")) 
				h = h +" " +  $("#mba_u").val();
			var data = $("#update_form").serialize() + "&qalification=" + h;
			$.ajax({
				data: data,
				type: "post",
				url: "slim/api/index.php/update",
				success: function(dataResult){
					$('#editEmployeeModal').modal('hide');
					if(dataResult.statusCode==200){
						clear1();
		               	$("#fname"+dataResult.method['id']).html(dataResult.method['fname_u']);
		               	$("#lname"+dataResult.method['id']).html(dataResult.method['lname_u']);
		               	$("#gender"+dataResult.method['id']).html(dataResult.method['gender_u']);
		               	$("#bdate"+dataResult.method['id']).html(dataResult.method['bdate_u']);
		               	$("#city"+dataResult.method['id']).html(dataResult.method['city_u']);
		               	$("#mno"+dataResult.method['id']).html(dataResult.method['mno_u']);
		               	$("#email"+dataResult.method['id']).html(dataResult.method['email_u']);
		               	$("#desi"+dataResult.method['id']).html(dataResult.method['desi_u']);
		               	$("#salary"+dataResult.method['id']).html(dataResult.method['salary_u']);
		               	$("#quali"+dataResult.method['id']).html(dataResult.method['quali_u']);
		                $("#du"+dataResult.method['id']).html('<a href="#editEmployeeModal" class="edit" data-toggle="modal">\
										<i class="material-icons update" data-toggle="tooltip" \
										data-id='+dataResult.method['id']+'\
										data-fname='+dataResult.method['fname_u']+'\
										data-lname=' + dataResult.method['lname_u'] +'\
										data-gender='+dataResult.method['gender_u']+'\
										data-bdate='+ dataResult.method['bdate_u'] +'\
										data-city='+ dataResult.method['city_u'] +'\
										data-mno='+ dataResult.method['mno_u'] +'\
										data-email='+ dataResult.method['email_u'] +'\
										data-desi='+ dataResult.method['desi_u'] +'\
										data-salary='+ dataResult.method['salary_u']+'\
										data-qua='+ dataResult.method['quali_u'] +'\
										title="Edit"></i>\
									</a>\
									<a href="#deleteEmployeeModal" class="delete" data-id="'+dataResult.method['id']+'" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" \
									 title="Delete"> </i></a></td>');

					            document.getElementById("message").innerHTML = 'Data ' + dataResult.method['id']+' Updated successfully !';
								$(".alert")	.show();
								setTimeout(function () {
									$(".alert")	.hide();
								},5000);
					}

					else if(dataResult.statusCode==201){
					   alert(dataResult);
					} 
				}
			});
		}
	});

	$(document).on("click", ".delete", function() { 
		var id=$(this).attr("data-id");
		console.log("sbbc" + id);
		$('#id_d').val(id);
	});

	$(document).on("click", "#delete", function() { 
		$.ajax({
			data: {
				id: $("#id_d").val()
			},
			type: "post",
			url: "slim/api/index.php/deletes",
			success: function(dataResult){
				$('#deleteEmployeeModal').modal('hide');
				if(dataResult.statusCode==200){
         			$("#"+dataResult.id).remove();
		            document.getElementById("message").innerHTML = 'Data' + dataResult.id+' deleted successfully !';
					$(".alert")	.show();
					setTimeout(function () {
						$(".alert")	.hide();
					},5000);
				}
				else if(dataResult.statusCode==201){
				   alert(dataResult);
				} 
			}
		});
	});

	$(document).on("click", "#delete_multiple", function() {
		var user = [];
		$(".user_checkbox:checked").each(function() {
			user.push($(this).data('user-id'));
		});
		if(user.length <=0) {
			alert("Please select records."); 
		} 
		else { 
			WRN_PROFILE_DELETE = "Are you sure you want to delete "+(user.length>1?"these":"this")+" row?";
			var checked = confirm(WRN_PROFILE_DELETE);
			if(checked == true) {
				var selected_values = user.join(",");
				console.log(selected_values);
				$.ajax({
					type: "POST",
					url: "slim/api/index.php/deletem",
					cache:false,
					data:{						
						id : selected_values
					},
					success: function(dataResult) { 
						$('#deleteEmployeeModal').modal('hide');
						if(dataResult.statusCode==200){
							setTimeout(function () {
			                    var ids = dataResult.id.split(",");
								for (var i=0; i < ids.length; i++ ) {	
									$("#"+ids[i]).remove(); 
								}	
								document.getElementById("message").innerHTML = 'Data' + ids+' deleted successfully !'; 	
								$(".alert")	.show();
							},1000);
							setTimeout(function () {
								$(".alert")	.hide();
							},5000);
						}
						else if(dataResult.statusCode==201){
						   alert(dataResult);
						}
					} 
				}); 
			}  
		} 
	});

	$(document).on("click", ".next", function() {
		e.preventDefault();
		e.stopPropagation();
		var page=$(this).attr("data-page");
		var record=$(this).attr("data-record");
		$.ajax({
	        url: "slim/api/index.php/allRecords",
			type: "POST",
			cache: false,
			data :{
				page:page,
				record :record
			},
	        success: function (res, status) {
	            if (status == "success") 
	                $(".data").html(res);
	        }
	    });
	});

	

$(document).on("click", ".page-link", function(e) {
			var id = $(this).attr("data-id");
			var select_id = $(this).parent().attr("id");
			console.log("select_id : " + select_id)
			$("#"+select_id).addClass("active");
			page = id;
			limit = $("#records").val();
			column= column;
			val =val;
			order =order;
			data();
});

$(document).on("change", "#records", function(e) {
	e.preventDefault();
	var l1=$("#records").val();
	limit=l1;
	order=order;
	column=column;
	page=1;
	data();
});

function sort1(e) {
	e.preventDefault();
		var select_id = 1;
		limit = $("#records").val();
		column = column;
		order = order;
		data();
		$("#"+select_id).addClass("active");
}

$(document).on("click", ".assfnm", function(e) {
			column = "FirstName";
			order = "ASC";
			sort1(e);

});

$(document).on("input", "#search", function(e) {
    val=$(this).val();
    console.log("value : " + val);
    sort1(e);
});

$(document).on("click", ".desfnm", function(e) {
	column = "FirstName";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".asslnm", function(e) {
			column = "LastName";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".deslnm", function(e) {
	column = "LastName";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assgen", function(e) {
			column = "Gender";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desgen", function(e) {
	column = "Gender";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assbdate", function(e) {
			column = "BirthDate";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desbdate", function(e) {
	column = "BirthDate";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".asscity", function(e) {
			column = "City";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".descity", function(e) {
	column = "City";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assmno", function(e) {
			column = "MobileNo";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desmno", function(e) {
	column = "MobileNo";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assemail", function(e) {
			column = "Email";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desemail", function(e) {
	column = "Email";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assdesi", function(e) {
			column = "Designation";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desdesi", function(e) {
	column = "Designation";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".asssal", function(e) {
			column = "Salary";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".dessal", function(e) {
	column = "Salary";
	order = "DESC";
	sort1(e);
});

$(document).on("click", ".assquali", function(e) {
			column = "Qualification";
			order = "ASC";
			sort1(e);

});

$(document).on("click", ".desquali", function(e) {
	column = "Qualification";
	order = "DESC";
	sort1(e);
});

function clear1(){
    $('#fname').val('');
    $('#lname').val('');
    $('#gender').val('');
    $('#bdate').val('');
    $('#email').val('');
    $('#mno').val('');
    $('#city').val('');
    $('#desi').val('');
 	$('#salary').val('');
    $('#quali').val('');
    document.getElementById('fname_error').innerHTML=''; 
    document.getElementById('lname_error').innerHTML=''; 
    document.getElementById('gender_error').innerHTML='';
    document.getElementById('bdate_error').innerHTML='';
    document.getElementById('email_error').innerHTML='';
    document.getElementById('mno_error').innerHTML='';
    document.getElementById('quali_error').innerHTML='';
    document.getElementById('sal_error').innerHTML='';
}

$(document).on("click", "#cancel", function() { 
    clear1();
}) 

$(document).on("click", "#close1", function() { 
    clear1();
}) 

function uclear(){
    $('#fname_u').val('');
    $('#lname_u').val('');
    $('#gender_u').val('');
    $('#bdate_u').val('');
    $('#email_u').val('');
    $('#mno_u').val('');
    $('#city_u').val('');
    $('#desi_u').val('');
 	$('#salary_u').val('');
    $('#quali_u').val('');
    document.getElementById('fnameu_error').innerHTML=''; 
    document.getElementById('lnameu_error').innerHTML=''; 
    document.getElementById('genderu_error').innerHTML='';
    document.getElementById('bdateu_error').innerHTML='';
    document.getElementById('emailu_error').innerHTML='';
    document.getElementById('mnou_error').innerHTML='';
    document.getElementById('qualiu_error').innerHTML='';
    document.getElementById('salu_error').innerHTML='';
}

$(document).on("click", "#cancelu", function() { 
    uclear();
}) 

$(document).on("click", "#closeu", function() { 
    uclear();
}) 

function ValidationForm(){
    var error=0;

    var a=document.forms["user_form"]["fname"].value;
    var reg1=/^[a-zA-Z ]*$/;
    document.getElementById('fname_error').innerHTML='';
    if(a=='' || a==null){
      error++;
      document.getElementById('fname_error').innerHTML = 'First Name must be filled out';
    } else if(reg1.test(a) == false || a.length<2 || a.length>30){
      error++;
      document.getElementById('fname_error').innerHTML = 'Enter Your Proper name';
    }

    var b=document.forms["user_form"]["lname"].value;
    document.getElementById('lname_error').innerHTML='';
    if(b=='' || b==null){
      error++;
      document.getElementById('lname_error').innerHTML = 'Last Name must be filled out';
    }else if(reg1.test(b) == false || b.length<2 || b.length>30){
      error++;
      document.getElementById('lname_error').innerHTML = 'Enter Your Proper name';
    }

    var d=document.forms["user_form"]["gender"].value;
    document.getElementById('gender_error').innerHTML='';
    if(!(d=='Male' || d=='Female')){
      error++;
      document.getElementById('gender_error').innerHTML = 'Gender Must Be Selected.';
    }

    var f=document.forms["user_form"]["bdate"].value;
    document.getElementById('bdate_error').innerHTML='';
    if(f=='' || f==null){
      error++;
      document.getElementById('bdate_error').innerHTML = 'BirthDate must be filled out';
    }else {
      var bdate=f.split('/');
      var idate=new Date(bdate[2] + "/" + bdate[1] + "/" + bdate[0]);
      var cdate=new Date();
      if(cdate.getFullYear()-idate.getFullYear()  < 18){
        error++;
        document.getElementById('bdate_error').innerHTML = 'Your age must be 18.';
      }
    }

    var h=document.forms["user_form"]["email"].value;
    document.getElementById('email_error').innerHTML='';
    if(h=='' || h==null){
      error++;
      document.getElementById('email_error').innerHTML = 'Email must be filled out';
    }else if(h.length<10 || h.length>30){
      error++;
      document.getElementById('email_error').innerHTML = 'Enter Your Proper EmailID';
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(h) == false){
      error++;
      document.getElementById('email_error').innerHTML = 'Enter Your Proper EmailID';
    }

    var i=document.forms["user_form"]["mno"].value;
    var reg=/^[0-9]*[.]?[0-9]*$/;
    document.getElementById('mno_error').innerHTML='';
    if(i=='' || i==null){
      error++;
      document.getElementById('mno_error').innerHTML = 'Mobile Number must be filled out';
    }else if(reg.test(i) == false || i.length!=10){
      error++;
      document.getElementById('mno_error').innerHTML = 'Enter 10 Digits.';
    }

    var e=document.forms["user_form"]["quali"].value;
    var e1=document.getElementById("mca");
    var e2=document.getElementById("mba");
    document.getElementById('quali_error').innerHTML='';
    if(e1.checked == false && e2.checked == false){
      error++;
      document.getElementById('quali_error').innerHTML = 'Select Your Qualification.';
    }

    var f=document.forms["user_form"]["salary"].value;
     document.getElementById('sal_error').innerHTML='';
    if(f=='' || f==null){
      error++;
      document.getElementById('sal_error').innerHTML = 'Salary must be filled out';
    }else if(f.length<3 || f.length>6){
      error++;
      document.getElementById('sal_error').innerHTML = 'Enter Your Salary Between 100 to 100000';
    }

    if(error>0) {
        return false;
    }
    return true;
  }
 
 function ValidationForm1(){
    var error=0;

    var a=document.forms["update_form"]["fname_u"].value;
    var reg1=/^[A-Za-z ]*$/;
    document.getElementById('fnameu_error').innerHTML='';
    if(a=='' || a==null){
      error++;
      document.getElementById('fnameu_error').innerHTML = 'First Name must be filled out';
    } else if(reg1.test(a) == false || a.length<2 || a.length>30){
      error++;
      document.getElementById('fnameu_error').innerHTML = 'Enter Your Proper name';
    }

    var b=document.forms["update_form"]["lname_u"].value;
    document.getElementById('lnameu_error').innerHTML='';
    if(b=='' || b==null){
      error++;
      document.getElementById('lnameu_error').innerHTML = 'Last Name must be filled out';
    }else if(reg1.test(b) == false || b.length<2 || b.length>30){
      error++;
      document.getElementById('lnameu_error').innerHTML = 'Enter Your Proper name';
    }

    var d=document.forms["update_form"]["gender_u"].value;
    document.getElementById('genderu_error').innerHTML='';
    if(!(d=='Male' || d=='Female')){
      error++;
      document.getElementById('genderu_error').innerHTML = 'Gender Must Be Selected.';
    }

    var f=document.forms["update_form"]["bdate_u"].value;
    document.getElementById('bdateu_error').innerHTML='';
    if(f=='' || f==null){
      error++;
      document.getElementById('bdateu_error').innerHTML = 'BirthDate must be filled out';
    }else {
      var bdate=f.split('/');
      var idate=new Date(bdate[2] + "/" + bdate[1] + "/" + bdate[0]);
      var cdate=new Date();
      if(cdate.getFullYear()-idate.getFullYear()  < 18){
        error++;
        document.getElementById('bdateu_error').innerHTML = 'Your age must be 18.';
      }
    }

    var h=document.forms["update_form"]["email_u"].value;
    document.getElementById('emailu_error').innerHTML='';
    if(h=='' || h==null){
      error++;
      document.getElementById('emailu_error').innerHTML = 'Email must be filled out';
    }else if(h.length<10 || h.length>30){
      error++;
      document.getElementById('emailu_error').innerHTML = 'Enter Your Proper EmailID';
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(h) == false){
      error++;
      document.getElementById('emailu_error').innerHTML = 'Enter Your Proper EmailID';
    }

    var i=document.forms["update_form"]["mno_u"].value;
    var reg=/^[0-9]*[.]?[0-9]*$/;
    document.getElementById('mnou_error').innerHTML='';
    if(i=='' || i==null){
      error++;
      document.getElementById('mnou_error').innerHTML = 'Mobile Number must be filled out';
    }else if(reg.test(i) == false || i.length!=10){
      error++;
      document.getElementById('mnou_error').innerHTML = 'Enter 10 Digits.';
    }

    var e=document.forms["update_form"]["quali_u"].value;
    var e1=document.getElementById("mca_u");
    var e2=document.getElementById("mba_u");
    document.getElementById('qualiu_error').innerHTML='';
    if(e1.checked == false && e2.checked == false){
      error++;
      document.getElementById('qualiu_error').innerHTML = 'Select Your Qualification.';
    }

    var f=document.forms["update_form"]["salary_u"].value;
     document.getElementById('salu_error').innerHTML='';
    if(f=='' || f==null){
      error++;
      document.getElementById('salu_error').innerHTML = 'Salary must be filled out';
    }else if(f.length<3 || f.length>6){
      error++;
      document.getElementById('salu_error').innerHTML = 'Enter Your Salary Between 100 to 100000';
    }

    if(error>0) {
        return false;
    }
    return true;
  }
