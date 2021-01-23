$(document).ready(function(){
	img();
});

$(document).on("click", ".refresh", function() {
	img();
});

function img()
{
	$.ajax({
	        url: "curl/demo.php",
			type: "GET",
	        success: function (data) {
	        	var data = JSON.parse(data);
	            $("#dimg").attr("src",JSON.parse(data['dimg']).message);
	            $("#dt").html(data['dt']);
	            $("#weather").html(data['weather']);
	            $("#weather1").html(data['weather1']);
	        }
	});
}

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