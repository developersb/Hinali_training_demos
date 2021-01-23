<?php
include 'database.php';

class crud{
	function __construct() {
		$this->conn = mysqli_connect("localhost", "root", "", "urldb","3308"); 
  }	

  public function alldata(){
    $this->rs_result = mysqli_query ($this->conn, "SELECT * FROM url order by No DESC");    
	  $result = array();
    $n = 0;
    while ($row = mysqli_fetch_array($this->rs_result)) {
      $result[$n]=$row;
      $n++;
    }
    return $result;
  }

  public function insert($method) {
    $URL = $method['url']; 
    if(!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$URL)){
      $errorMsg= 'error : You did not enter a valid url.';
      $code= "1";
      $arr=array($code,$errorMsg);
      return $arr;
    }
    else {
      $curlHandle = curl_init();
      curl_setopt($curlHandle, CURLOPT_URL, $URL);
      curl_setopt($curlHandle, CURLOPT_HEADER, true);
      curl_setopt($curlHandle, CURLOPT_NOBODY  , true);  
      curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($curlHandle,CURLOPT_SSL_VERIFYPEER, false);
      curl_exec($curlHandle);
      $response = curl_getinfo($curlHandle, CURLINFO_HTTP_CODE);
      curl_close($curlHandle);
      if($response=='0')
      $response="NA"; 
    	$this->result = mysqli_query($this->conn, "Insert into `url`(`fullurl`,`statuscode`,`lastcheck`) values('".$URL."','".$response."','".date("Y-m-d h:i:sa")."')");
      return $this;
    }
    	
  }

  public function update($method) {
    $url = $method['url']; 
    $curlHandle = curl_init();
    curl_setopt($curlHandle, CURLOPT_URL, $url);
    curl_setopt($curlHandle, CURLOPT_HEADER, true);
    curl_setopt($curlHandle, CURLOPT_NOBODY  , true); 
    curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curlHandle,CURLOPT_SSL_VERIFYPEER, false);
    curl_exec($curlHandle);
    $response = curl_getinfo($curlHandle, CURLINFO_HTTP_CODE);
    curl_close($curlHandle);
    if($response==0)
      $response="NA";
  	$this->result = mysqli_query($this->conn, "update `url` set `statuscode`='".$response."',`lastcheck`='".date("Y-m-d h:i:sa")."' where No=" . $method['no']);
  	return $this;
  }
}
?>