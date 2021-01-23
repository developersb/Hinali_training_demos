<?php
	include("Database.php");
    $db=new Database("student","root","");
  	$val=$_GET['id'];
	$result=$db->delete('stud',array("ID"=>$val));
?>