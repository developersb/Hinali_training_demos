$(document).ready(function(){
    load_data();

    $("#form1").validate({
		rules: {
			fnm: {
				nmcheck :true
			},
			lnm: {
				nmcheck :true
			},
			address :{
				minlength: 10 ,
				maxlength:50
			},
			bdate : {
				bdatecheck :true
			},
			email: {
				email: true,
				minlength:10,
				maxlength: 30,
			},
			mno : { 
				digits :true,
				minlength: 10 ,
				maxlength: 10
			},
			pwd :{
				pwcheck:true,
			},
			cpwd : {
				equalTo: "#pwd"
			}
		},

		messages: {
			fnm: {
				nmcheck : 'Enter your proper name'
			},
			lnm: {
				nmcheck : 'Enter your proper name'
			},
			address: {
				minlength : 'Enter Your address between 10 to 50 letters',
				maxlength : 'Enter Your address between 10 to 50 letters'
			},
			bdate : {
				bdatecheck : "Enter age above 18."
			},
			email: {
				email: 'Please Enter Valid Email ID',
				maxlength : 'Enter Your email proper',
				minlength: 'Enter Your email proper'
			},
			mno : { 
				digits :'Enter Only Digits',
				minlength: 'Enter 10 digits mobile no' ,
				maxlength: 'Enter 10 digits mobile no' 
			},
			pwd: {
				pwcheck:"Enter proper password"
			},
			cpwd : {
				equalTo: "Both Password Are Different"
			}
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
     

    $.validator.addClassRules('ClassRequire', {
        required: true ,
    });

    $.validator.addMethod("nmcheck",function(a){
		var reg1=/^[A-Za-z]*$/;
        if(reg1.test(a) == false || a.length<2 || a.length>10)
		   return false;
		return true;
    });

     $.validator.addMethod("bdatecheck",function(f){
		var bdate=f.split('/');
        var idate=new Date(bdate[2] + "/" + bdate[1] + "/" + bdate[0]);
        var cdate=new Date();
        if(cdate.getFullYear()-idate.getFullYear()  < 18)
			return false;
        return true;
     });

	$.validator.addMethod("pwcheck", function(value) {
		var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
		if(reg.test(value) == false){
			return false;
		} 
		return true;
    });

	$("#file").change(function(){
		var fileExtension = ['jpeg', 'jpg'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            document.getElementById('photo_error').innerHTML = 'Photo Must Be .jpg format';
            $('#imgshow').attr('src', '');
            $('#imgnm').val('');
            $('#imgshow').hide();
        }
        else if (this.files && this.files[0]) {
			document.getElementById('photo_error').innerHTML = '';
			var reader = new FileReader();
			reader.onload = function (e) {
				$('#imgshow').attr('src', e.target.result);
				$('#imgnm').val(e.target.result);
				$('#imgshow').show();
			}
			reader.readAsDataURL(this.files[0]);
		}
   });
});

function load_data() {
    $.ajax({
        url: 'data.php',
        method: "GET",
        success: function (res, status) {
            if (status == "success") 
                $(".data").html(res);
        }
    });
}

function iu() {
	$('#myModal').modal('hide');
    dataclear();
    load_data();
}

function clear(){
	var validator = $( "#form1" ).validate();
    validator.resetForm();
    dataclear();
}

function dataclear(){
	$('#id_i1').val(''),
    $('#fnm').val(''),
    $('#lnm').val(''),
    $('#address').val(''),
    $('#gender').val(''),
    $('#hobby').val(''),
    $('#bdate').val(''),
    $('#course').val('')
    $('#email').val(''),
    $('#mno').val(''),
    $('#pwd').val(''),
    $('#cpwd').val(''),
    $('#imgshow').attr('src', ''),
    $('#imgnm').val(''),
    $('#file').val('');
}

//insert
$(document).on("click", "#add", function() { 
	$(".modal-backdrop").show();
    $('#id_d1').val(0);
    $('#imgshow').hide();
});
 
$(document).on('click', "#formbtn", function (e) {
    if($("#form1").valid() == true){
		e.preventDefault();
		e.stopPropagation();
     
		h="";
		if ($("#Traveling").is(":checked")) 
			h = h + "Traveling";
		if ($("#Reading").is(":checked")) 
			h = h +" " +  "Reading";

		var id1=$('#id_d1').val();
		var data = new FormData(document.getElementById("form1"));
		data.append('hby',h);

		if(id1==0){
			$.ajax({
				method : "POST",
				url: 'insert.php',
				cache:false,
				data :data,
				contentType : false, 
				processData: false,
				success: function (response) {
					iu();  
					var data1 = JSON.parse(response);
					$('#insertmsg').val(data1.message);          
					$("#insertMsgModal").modal('show');
					setTimeout(function() {
						$('#insertMsgModal').modal('hide');
						$(".modal-backdrop").hide();
					}, 2000);
				}
			});
		}
		else {
			$.ajax({
				url: 'update.php',
				method : "POST",
				cache:false,
				data :data,
				contentType : false, 
				processData: false,
				success: function (res) {
					iu();
					var data1 = JSON.parse(res);
					$('#updatemsg').val(data1.message);
					$("#updateMsgModal").modal('show');
					setTimeout(function() {
						$('#updateMsgModal').modal('hide');
						$(".modal-backdrop").hide();
					}, 2000);
				}
			});
		}
	}
});
   
//edit
$(document).on("click", ".edit", function() { 
	$(".modal-backdrop").show();

    $('#myModal #id_d1').val($(this).attr("data-id"));
    $('#myModal #fnm').val($(this).attr("data-fnm"));
    $('#myModal #lnm').val($(this).attr("data-lnm"));
    $('#myModal #address').val($(this).attr("data-address"));
    $('#myModal #bdate').val($(this).attr("data-bdate"));
    $('#myModal #course').val($(this).attr("data-course"));
    $('#myModal #email').val($(this).attr("data-email"));
    $('#myModal #mno').val($(this).attr("data-mno"));
    $('#myModal #pwd').val($(this).attr("data-pwd"));
    $('#myModal #cpwd').val($(this).attr("data-pwd"));
    $('#imgshow').attr('src', 'uploads/'+$(this).attr("data-file"));
    $('#imgnm').val('uploads/'+$(this).attr("data-file"));
    $('#imgshow').show();

    var gender=$(this).attr("data-gender");
    if(gender=="male")
		$('#male').prop('checked','checked');
    else
		$('#female').prop('checked','checked');

    var hobby=$(this).attr("data-hobby");
    if(hobby=="Traveling"){
		$('#Traveling').prop('checked','checked');
		$('#Reading').prop('checked',false);
    }
    else if(hobby==" Reading"){
		$('#Traveling').prop('checked',false);
		$('#Reading').prop('checked','checked');
    }
    else if(hobby=="Traveling Reading"){
		$('#Traveling').prop('checked','checked');
		$('#Reading').prop('checked','checked');
    }
});


//delete
$(document).on("click", ".delete", function() { 
	var id=$(this).attr("data-id");
    $('#id_d').val(id);
    $(".modal-backdrop").show();
});

$(document).on("click", "#deletebtn", function(e) { 
	e.preventDefault();
    var id1=$("#id_d").val(); 
    $.ajax({
        url: 'delete.php',
        method: "GET",
        data: {
           id :id1,
        },
        success: function (res) {
			$("#deleteModal").modal('hide');
            $("#deleteMsgModal").modal('show');
            setTimeout(function() {$('#deleteMsgModal').modal('hide');}, 2000);
            load_data();
        }
    });
});

$(document).on("click", "#cancel1", function() { 
    clear();
}) 

$(document).on("click", ".close", function() { 
    clear();
}) 