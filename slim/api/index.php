<?php

ini_set('memory_limit','256M');

require 'vendor/autoload.php';
require 'config.php';
require 'Database.php';

date_default_timezone_set('Asia/Kolkata');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;

function connectdb(){
	$db = new Database(DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST); 
	return  $db;
}

$app = new \Slim\App();

$container = $app->getContainer();
$container['upload_directory'] = __DIR__ . '/uploads';

//data
$app->get('/allRecords', function (Request $request, Response $response, array $args) {
		$db = connectdb();
		$method = $request->getQueryParams();
		    
		if(isset($method["limit"])){
			$limit=$method["limit"];
		}
		else {
			$limit=4;
		}  
			
			
		if (isset($method["page"])) {    
		    $page  = $method["page"];    
		}    
		else {    
			$page=1;    
		}  
		$start_from = ($page-1) * $limit;
		$orderby="";
		if(isset($method["column"])){
			$column=$method["column"];
			$order=$method["order"];
			$orderby=" ORDER BY ".$column . " " . $order;
		}
		$val="";
		if(isset($method["val"])){
			$value=$method["val"];
			$val=" WHERE FirstName like '%".$value."%' OR LastName like '%".$value."%' OR Gender like '%".$value."%' OR BirthDate like '%".$value."%' OR City like '%".$value."%' OR MobileNo like '%".$value."%' OR Email like '%".$value."%' OR Designation like '%".$value."%' OR Qualification like '%".$value."%'";
			if((int)$value!=0)
				$val.=" OR ID=".(int)$value ." OR Salary=".(int)$value."";
		}
		$query = "SELECT * FROM emp ".$val.$orderby." LIMIT ". $start_from .",". $limit; 
		$arr['query']=$query;
		$rs_result = $db->query($query);

	$arr['task'] = $db->result_array(); 

	$query1 ="SELECT * FROM emp ".$val.$orderby;
	$rs_result = $db->query($query1);
	$arr['count']=$db->count();
	return $response->withJson($arr);
});

function is_multi($a) {
	$rv = array_filter($a,'is_array');
	if(count($rv)>0) return true;
	return false;
}

//insert
$app->post('/insert', function (Request $request, Response $response, array $args) {
	$db = connectdb();
	$method = $request->getParsedBody();
	$result=$db->insert('emp',array("FirstName"=>$method['fname'],
				"LastName"=>$method['lname'],
				"Gender"=>$method['gender'],
				"BirthDate"=>$method['bdate'],
				"Email"=>$method['email'],
				"MobileNo"=>$method['mno'],
				"City"=>$method['city'],
				"Designation"=>$method['desi'],
				"Salary"=>$method['salary'],
				"Qualification"=>$method['qalification']
	));	
	$query1 ="SELECT * FROM emp WHERE ID = (SELECT max(ID) FROM emp)";
	$rs_result = $db->query($query1);
	$id=$db->result_array();
	if($result)
		return $response->withJson(array("statusCode"=>200,"method"=>$method,"id"=>$id));
	else
		 return $response->withStatus(409);
});

//update
$app->post('/update', function (Request $request, Response $response, array $args) {
	$db = connectdb();
	$method = $request->getParsedBody();
	$result=$db->update('emp',array("FirstName"=>$method['fname_u'],
				"LastName"=>$method['lname_u'],
				"Gender"=>$method['gender_u'],
				"BirthDate"=>$method['bdate_u'],
				"Email"=>$method['email_u'],
				"MobileNo"=>$method['mno_u'],
				"City"=>$method['city_u'],
				"Designation"=>$method['desi_u'],
				"Salary"=>$method['salary_u'],
				"Qualification"=>$method['qalification']
	),$where=array("ID"=>$method['id']));	
	if($result)
		return $response->withJson(array("statusCode"=>200,"method"=>$method));
	else
		 return $response->withStatus(409);
});
//single delete
$app->post('/deletes', function (Request $request, Response $response, array $args) {
	$db = connectdb();
	$method = $request->getParsedBody();
	$val=$method['id'];
	$result=$db->delete('emp',array("ID"=>$val));
	$data = array("statusCode"=>200,"id"=>$val);
	if($result)
		return $response->withJson($data);
	else
		echo "Error: ";
});


//multiple delete
$app->post('/deletem', function (Request $request, Response $response, array $args) {
	$db = connectdb();
	$method = $request->getParsedBody();
	$val=$method['id'];
	$sql = "DELETE FROM emp WHERE ID in ($val)";
	$result=$db->query($sql);
	$data = array("statusCode"=>200,"id"=>$val);
	if($result)
		return $response->withJson($data);
	else
		echo "Error: ";
});

$app->run();