<?php
    include("../cphp/Database.php");
    $db=new Database("student","root","");
				$result=$db->select('stud',$where=array("Email"=>$_POST['email'],"Password"=>$_POST['pwd']));
				if ($db->count() != 0) {
					session_start();
					$_SESSION["name"]= $db->result_array()[0]['FirstName'];
					//echo  ("sess".isset($_SESSION['name']));
					echo json_encode(array('statusCode'=>'200'));
				}else{
					echo json_encode(array('statusCode'=>'201'));
				}	
?>