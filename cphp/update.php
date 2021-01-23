<?php
  include("Database.php");
  $db=new Database("student","root","");
	if (!empty($_FILES['file']['name'])) {
		$fileExt = explode('.', $_FILES['file']['name']);
		$fileNew = reset($fileExt) . "." . end($fileExt); 
		$filePath = 'uploads/'.$fileNew; 
		if ($_FILES['file']['size'] > 0  && $_FILES['file']['error']==0) {
			$val=$_POST['id_d1'];
			$result=$db->update('stud',$fields=array("FirstName"=>$_POST['fnm'],
				"LastName"=>$_POST['lnm'],
				"Address"=>$_POST['address'],
				"Gender"=>$_POST['gender'],
				"Hobby"=>$_POST['hby'],
				"BirthDate"=>$_POST['bdate'],
				"Course"=>$_POST['course'],
				"Email"=>$_POST['email'],
				"MobileNo"=>$_POST['mno'],
				"Password"=>$_POST['pwd'],
				"Photo"=>$fileNew,
			),$where=array("ID"=>$val));
			if ($result) {
				move_uploaded_file($_FILES['file']['tmp_name'], $filePath);
				echo json_encode(array('error'=>'1', 'message'=>'Successfully Record Updated'));
			}else
				echo json_encode(array('error'=>'0', 'message'=>'File is not uploaded try again'));	
		}else
			echo json_encode(array('error'=>'0', 'message'=>'Unable to upload physical file'));
	}else {
		$val=$_POST['id_d1'];
		$result=$db->update('stud',$fields=array("FirstName"=>$_POST['fnm'],
			"LastName"=>$_POST['lnm'],
			"Address"=>$_POST['address'],
			"Gender"=>$_POST['gender'],
			"Hobby"=>$_POST['hby'],
			"BirthDate"=>$_POST['bdate'],
			"Course"=>$_POST['course'],
			"Email"=>$_POST['email'],
			"MobileNo"=>$_POST['mno'],
			"Password"=>$_POST['pwd']),$where=array("ID"=>$val));
		echo json_encode(array('error'=>'1', 'message'=>'Successfully Record Updated'));
	}
?>