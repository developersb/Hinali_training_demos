$(document).ready(function(){
	$(".headermain").load("header.php");
});
$(document).on("click", "#home", function() {
	 location.reload();
});

$(document).on("click", "#curl", function() {
	  $(".main-content").load("curl/index.html");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#layout1", function() {
	 $(".main-content").load("layout1");
	 $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#layout2", function() {
	 $(".main-content").load("layout2");
	 $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#layout3", function() {
	 $(".main-content").load("layout3");
	 $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#layout4", function() {
	 $(".main-content").load("layout4/stpual.html");
	 $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#cval", function() {
	  $(".main-content").load("jquery/ClassValidation.html");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#cusval", function() {
	  $(".main-content").load("jquery/CustomValidation.html");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#meval", function() {
	  $(".main-content").load("jquery/MethodValidation.html");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#regi", function() {
	  $(".main-content").load("jquery/regi.html");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#slim", function() {
	  $(".main-content").load("slim");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#oops", function() {
	  $(".main-content").load("oops");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#cphp", function() {
	  $(".main-content").load("cphp/stud.php");
	  $('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", ".login", function() {
	$(".main-content").load("jquery/login.html");
	$('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#lgacc", function() {
	$(".main-content").load("jquery/login.html");
});

$(document).on("click", ".signup", function() {
	$(".main-content").load("jquery/regi.html");
	$('.navbar-collapse.in').collapse('hide');
});

$(document).on("click", "#crtacc", function() {
	$(".main-content").load("jquery/regi.html");
});

$(document).on("click", ".logout", function(e) {
	
	$.ajax({
		type: "get",
		url: "js/logout.php",
		success: function(dataResult){
			console.log("dfxgdg");
			location.reload();

		}
	});
});

$(document).on("click", "#logincheck", function(e) {
	e.preventDefault();
    e.stopPropagation();
    if(loginvali())	{
		var data = $("#loginform").serialize();
		$.ajax({
			data: data,
			type: "post",
			url: "js/logincheck.php",
			success: function(dataResult){
				
				data=JSON.parse(dataResult);
				if(data.statusCode==200){
					document.getElementById('regi_success').innerHTML = '';
					location.reload();
				}
				else if(data.statusCode==201){
				   document.getElementById('login_error').innerHTML = 'Inavlid Username and Password';
				}    
			}
		});
	}
});

$(document).on("click", "#save", function(e) {
	e.preventDefault();
    e.stopPropagation();	
    if(ValidationForm()){
    	h="";
		if ($("#traveling").is(":checked")) 
			h = h + "Traveling";
		if ($("#reading").is(":checked")) 
			h = h +" " +  "Reading";

		var data = new FormData(document.getElementById("mainregi"));
		data.append('hby',h);
		$.ajax({
			url: "js/regi.php",
			method : "POST",
				cache:false,
				data :data,
				contentType : false, 
				processData: false,
			success: function(dataResult){
				data=JSON.parse(dataResult);
				if(data.error=='1'){
					$(".main-content").load("jquery/login.html");
					document.getElementById('regi_success').innerHTML = 'Successfully Registred Please Login';
				}
				else if(data.error=='0'){
				   alert("");
				}
			}
		});
	}
});

function loginvali(){
	var error=0;

	var h=document.forms["loginform"]["email"].value;
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

    var hh=document.forms["loginform"]["pwd"].value;
    document.getElementById('pwd_error').innerHTML='';
    if(hh=='' || hh==null){
      error++;
      document.getElementById('pwd_error').innerHTML = 'Password must be filled out';
    }

    if(error>0) {
        return false;
    }
    return true;
}

function ValidationForm(){
    var error=0;

    var a=document.forms["mainregi"]["fnm"].value;
    var reg1=/^[A-Za-z]*$/;
    document.getElementById('fname_error').innerHTML='';
    if(a=='' || a==null){
      error++;
      document.getElementById('fname_error').innerHTML = 'First Name must be filled out';
    } else if(reg1.test(a) == false || a.length<2 || a.length>10){
      error++;
      document.getElementById('fname_error').innerHTML = 'Enter Your Proper name';
    }

    var b=document.forms["mainregi"]["lnm"].value;
    document.getElementById('lname_error').innerHTML='';
    if(b=='' || b==null){
      error++;
      document.getElementById('lname_error').innerHTML = 'Last Name must be filled out';
    }else if(reg1.test(b) == false || b.length<2 || b.length>10){
      error++;
      document.getElementById('lname_error').innerHTML = 'Enter Your Proper name';
    }

    var c=document.forms["mainregi"]["address"].value;
    document.getElementById('addr_error').innerHTML='';
    if(c=='' || c==null){
      error++;
      document.getElementById('addr_error').innerHTML = 'Address must be filled out';
    }else if(c.length<10 || c.length>50){
      error++;
      document.getElementById('addr_error').innerHTML = 'Enter Your Proper Address';
    }


    var e=document.forms["mainregi"]["hobby"].value;
    var e1=document.getElementById("traveling");
    var e2=document.getElementById("reading");
    document.getElementById('hobby_error').innerHTML='';
    if(e1.checked == false && e2.checked == false){
      error++;
      document.getElementById('hobby_error').innerHTML = 'Select Hobby.';
    }

   var f=document.forms["mainregi"]["bdate"].value;
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

    var g=document.forms["mainregi"]["course"].value;
    document.getElementById('course_error').innerHTML='';
    if(g == "select"){
      error++;
      document.getElementById('course_error').innerHTML = 'Select a Course';
    }

    var h=document.forms["mainregi"]["email"].value;
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

    var i=document.forms["mainregi"]["mno"].value;
    var reg=/^[0-9]*[.]?[0-9]*$/;
    document.getElementById('mno_error').innerHTML='';
    if(i=='' || i==null){
      error++;
      document.getElementById('mno_error').innerHTML = 'Mobile Number must be filled out';
    }else if(reg.test(i) == false || i.length!=10){
      error++;
      document.getElementById('mno_error').innerHTML = 'Enter Your Proper Mobile No.';
    }

    var j=document.forms["mainregi"]["pwd"].value;
    var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
    document.getElementById('pwd_error').innerHTML='';
    if(j=='' || j==null){
      error++;
      document.getElementById('pwd_error').innerHTML = 'Password must be filled out';
    }else if(reg.test(j) == false){
      error++;
      document.getElementById('pwd_error').innerHTML = 'Enter Your Proper Password';
    } 

    var k=document.forms["mainregi"]["cpwd"].value;
    document.getElementById('cpwd_error').innerHTML='';
    if(k=='' || k==null){
      error++;
      document.getElementById('cpwd_error').innerHTML = 'Password must be filled out';
    }else if(k != j){
      error++;
      document.getElementById('cpwd_error').innerHTML = 'Your both password are different';
    }    

    var l=document.forms["mainregi"]["photo"].value;
    var allowedExtensions =/(\.jpg|\.jpeg)$/i;
    var maxfilesize = 1024 * 1024;
    document.getElementById('photo_error').innerHTML='';
    if(l=='' || l==null){
      error++;
      document.getElementById('photo_error').innerHTML = 'Photo Must Be Upload';
    } else if (!allowedExtensions.exec(l)) { 
      error++;
      document.getElementById('photo_error').innerHTML = 'Photo Must Be .jpg format';
    } 

    if(error>0) {
        return false;
    }
    return true;
  }