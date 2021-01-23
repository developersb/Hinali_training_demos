$(document).ready(function(){
	data1();
	$(".alert")	.hide();
});

$(document).ajaxStart(function(){
    document.querySelector("#loader").style.display = "block"; 
	document.querySelector(".main-content").style.disabled  = "true"; 
	document.querySelector(".main-content").style.opacity  = "0.1"; 
});

$(document).ajaxComplete(function(){
 	document.querySelector("#loader").style.display = "none"; 
	document.querySelector(".main-content").style.visibility = "visible"; 
	document.querySelector(".main-content").style.opacity = "1";
});

$(document).on('click','#check',function(e) {
	var data= $("#check_url").serialize();
	var urlregex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	var h=document.forms["check_url"]["url"].value;
    document.getElementById('url_error').innerHTML='';
    if(h=='' || h==null){
      document.getElementById('url_error').innerHTML = 'URL must be filled out';
    } else if (urlregex.test(h) == false){
      document.getElementById('url_error').innerHTML = 'Enter Proper URL';
    } else{
		$.ajax({
			data: data,
			type: "post",
			url: "oops/api/index.php/insert",
			success: function(dataResult) {
				if(dataResult.r[0]==1){
					document.getElementById('url_error').innerHTML = dataResult.r[1];
				}else{
					$('#checkurlmodal').modal('hide');
					$("#url").val('');
					document.getElementById("message").innerHTML = 'Data Inserted successfully !';
					$(".alert")	.show();
					setTimeout(function () {
						$(".alert")	.hide();
					},5000);
					data1();
				}
			}
		});
	}
});

function data1() {
	$.ajax({
		type: "get",
		url: "oops/api/index.php/alldata",
		success: function(dataResult){
			var data=dataResult;
			markup="";
                for (var i = 0; i < data.length; ++i) {
                	markup += '<tr id="tr'+data[i]['No']+'">';
						markup += "<td id='no"+data[i]["No"]+ "' >" + data[i]["No"] + "</td>"; 
						markup += "<td id='url"+data[i]['No']+"'>" + data[i]['fullurl'] + "</td>"; 
						markup += "<td id='scode"+data[i]['No']+"'>" + data[i]['statuscode'] + "</td>"; 
						markup += "<td id='lcheck"+data[i]['No']+"'>" + data[i]['lastcheck'] + "</td>"; 
						markup += '<td id="du'+data[i]["No"]+'"> <button class="btn" id="recheck" \
										data-no='+data[i]["No"]+' data-url='+data[i]['fullurl']+' data-scode=' + data[i]['statuscode'] +' data-lcheck='+data[i]['lastcheck']+'>Recheck</button>';
						markup += '<button class="btn" id="visit" data-url='+data[i]['fullurl']+'>Visit</button> </td>';
				}
				
                tableBody = $("table tbody");
                tableBody.empty(); 
                tableBody.append(markup);
                for (var i = 0; i < data.length; ++i) {
                	if(data[i]['statuscode']=="404" || data[i]['statuscode']=='NA'){
						 $("#tr" + data[i]['No']).addClass("trred");
					}
                }
		}
	}); 
}

$(document).on('click','#visit',function(e) {
	window.open($(this).attr("data-url")); 
	window.focus();
});

$(document).on('click','#recheck',function(e) {
	$.ajax({
		data: {
			no :$(this).attr("data-no"),
			url:$(this).attr("data-url"),
			scode:$(this).attr("data-scode"),
			lcheck:$(this).attr("data-lcheck"),	
		},
		type: "get",
		url: "oops/api/index.php/update",
		success: function(dataResult){
			document.getElementById("message").innerHTML = 'Data  Updated successfully !';
			$(".alert")	.show();
			setTimeout(function () {
				$(".alert")	.hide();
			},5000);
			data1();
		}
	});
});