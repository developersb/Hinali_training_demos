<?php

ini_set('memory_limit','256M');

require 'vendor/autoload.php';
require 'crud.php';

date_default_timezone_set('Asia/Kolkata');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;

$app = new \Slim\App();

//allrecord
$app->get('/alldata', function (Request $request, Response $response, array $args) {
	$db1=new crud();
	return $response->withJson($db1->alldata());
});

//insert
$app->post('/insert', function (Request $request, Response $response, array $args) {
	$db1=new crud();
	$method = $request->getParsedBody();
	$r=$db1->insert($method);
	if($r)
		return $response->withJson(array("statusCode"=>200,"r"=>$r));
	else
		return $response->withStatus(409);
});

//update
$app->get('/update', function (Request $request, Response $response, array $args) {
	$db1=new crud();
	$method = $request->getQueryParams();
	$r=$db1->update($method);
	if($r)
		return $response->withJson(array("statusCode"=>200));
	else
		return $response->withStatus(409);
});

$app->run();