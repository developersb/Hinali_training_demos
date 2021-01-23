<?php
$url='https://dog.ceo/api/breeds/image/random/';
$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
curl_close($ch);
$arr['dimg']= file_get_contents($url);

		$arr['weather']="";
		error_reporting(0);
		date_default_timezone_set(json_decode(file_get_contents('http://ip-api.com/json/'),true)['timezone']);
		$data = json_decode(file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=metric&appid=ebcf5230b3446f334fe3fa2fd2d4ce24"),true);
		$haze=ucfirst($data['weather'][0]['description']);
		$arr['weather'] =  "<center><h1><b>".$data['name'].",".$data['sys']['country']."</h1></b> 
				<img src='http://openweathermap.org/img/w/".$data['weather'][0]['icon'].".png'> ".$data['main']['temp']."°C   " .$haze."</b></center>";

		$arr['weather1']="<center>
				Clouds:".$data['clouds']['all']."%<br> 
				Humidity:".$data['main']['humidity']."%<br></center>";

$arr['dt']="<center>Date : " . date("d/m/Y") . "<br>Day : " . date("l") . "<br>Time : " . date("h:i:sa") . "</center>";
echo json_encode($arr);
?>