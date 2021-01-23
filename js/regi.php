<?php
  include("../cphp/Database.php");
  $db=new Database("student","root","");
	if (!empty($_FILES['photo']['name'])) {
		$fileName = $_FILES['photo']['name'];
		$fileExt = explode('.', $fileName);
		$fileActExt = strtolower(end($fileExt));
		$allowImg = array('png','jpeg','jpg');
		$fileNew = reset($fileExt) . "." . $fileActExt; 
		$filePath = '../Images/'.$fileNew; 

		if (in_array($fileActExt, $allowImg)) {
			if ($_FILES['photo']['size'] > 0  && $_FILES['photo']['error']==0) {
				$result=$db->insert('stud',array("FirstName"=>$_POST['fnm'],
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
				));
				if ($result) {
					move_uploaded_file($_FILES['photo']['tmp_name'], $filePath);
					echo json_encode(array('error'=>'1', 'message'=>'Record Successfully Inserted'));
				}else{
					echo json_encode(array('error'=>'0', 'message'=>'File is not uploaded try again'));
				}	
			}else{
				echo json_encode(array('error'=>'0', 'message'=>'Unable to upload physical file'));
			}
		}else{	
			echo json_encode(array('error'=>'0', 'message'=>'Only PNG, JPEG, JPG image allow'));
		}
	}else {
		$result=$db->insert('stud',array("FirstName"=>$_POST['fnm'],
			"Address"=>$_POST['address'],
			"LastName"=>$_POST['lnm'],
			"Gender"=>$_POST['gender'],
			"Hobby"=>$_POST['hby'],
			"BirthDate"=>$_POST['bdate'],
			"Course"=>$_POST['course'],
			"Email"=>$_POST['email'],
			"MobileNo"=>$_POST['mno'],
			"Password"=>$_POST['pwd']
		));
		echo json_encode(array('error'=>'1', 'message'=>'Record Successfully Inserted'));
	}
?>