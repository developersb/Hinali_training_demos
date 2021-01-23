<!DOCTYPE html>
<html lang="en">
	<head>
	  <script src="cphp/validation.js"></script> 
	  <link rel="stylesheet" type="text/css" href="cphp/style.css">
	  <link rel="stylesheet" type="text/css" href="cphp/bootstrap.css">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
	  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
	  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
	</head>

	<body>
		<div class="container-fluid marginremove">
			<div class="bs-example">
				<div class="row marginremove">
					<div class="col-6 col-xs-6 col-md-6 col-xl-6 col-sm-6">
						<img src="logo.jpg" height="100%" width="100px" align="left">
					</div>
					<div class="col-6 col-xs-6 col-md-6 col-sm-6 col-xl-6">
						<a href="#myModal" class="btn-success btn" data-toggle="modal" id="add"> <span>ADD USER</span></a>
					</div>
				</div>
			</div>
			<h6 class="data"></h6>
    
			<!-- Modal For Insert-Update -->
			<div id="myModal" class="modal fade" tabindex="-1">
				<form class="form-horizontal"  id="form1" method="post">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Registration</h5>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<div class="form-group">
									<div class="container">
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">FirstName:</label>
												<input type="hidden"  name="id_d1" class="form-control" id="id_d1" readonly> 
												<input type="text" id="fnm" class="form-control" placeholder="Enter First Name" name="fnm">
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">LastName:</label>
												<input type="text" id="lnm" class="form-control ClassRequire" placeholder="Enter Last Name" name="lnm">
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-12 col-md-12 col-xl-12">
												<label class="control-label" for="fname">Address:</label>
												<textarea rows="5" class="form-control ClassRequire fullwidth" cols="20" placeholder="Enter Address" name="address" id="address"></textarea>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6 textcenter">
												<label class="control-label">Gender:</label>
												<div class="form-check form-check">
													<input class="form-check-input" type="radio"  value="male" name="gender" id="male" checked>
													<label class="form-check-label  labelfield" for="inlineCheckbox1">Male</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input validation_require" type="radio" value="female" name="gender" id="female">
													<label class=" labelfield form-check-label " for="inlineCheckbox2">Female</label>
												</div>
											</div> 
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6 textcenter">
												<label class="control-label">Hobby:</label>
												<div class="form-check form-check">
													<input class="form-check-input" type="checkbox" id="Traveling" value="Traveling" name="hobby">
													<label class="form-check-label labelfield" for="inlineCheckbox1">Traveling</label>
												</div>
												<div class="form-check form-check-inline">
												  <input class="form-check-input" type="checkbox" id="Reading" value="Reading" name="hobby">
												  <label class=" labelfield form-check-label " for="inlineCheckbox2">Reading</label>
												</div>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname" >Birthdate:</label>
												<input type="date" name="bdate" class="form-control ClassRequire" placeholder="Birthdate" id="bdate"> 
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">Course:</label>
												<select class=" form-control ClassRequire" id="course" placeholder="Course" name="course">
													<option>MCA</option>
													<option>MBA</option>
													<option>MAM</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">Email:</label>
												<input type="email" name="email" class="form-control ClassRequire" placeholder="Email" id="email"> 
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">Mobile No.:</label>
												<input type="text" name="mno" class="form-control ClassRequire"  placeholder="Mobile No." id="mno"> 
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">Password:</label>
												<input type="password" class="form-control ClassRequire" name="pwd" placeholder="Password" id="pwd"> 
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label class="control-label" for="fname">ConfirmPassword:</label>
												<input type="password" class="form-control ClassRequire" name="cpwd" placeholder="Confirm Password" id="cpwd"> 
											</div>
										</div>
										<div class="row" id="imagedata">
											<div class="col-12 col-xs-12 col-sm-7 col-md-7 col-xl-7">
												<label class="control-label" for="fname">Profile:</label>
												<input type="File" class="fullwidth form-control " name="file" id="file" >
												<span class="error"><p id="photo_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-5 col-md-5 col-xl-5">
												<img src="" class="image" id="imgshow" height="100" width="150">
												<input type="hidden" id="imgnm" class=" form-control" name="imgnm" value="">
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="cancel" class="btn btn-secondary" data-dismiss="modal" id="cancel1">Cancel</button>
								<button type="submit" class="btn btn-primary " id="formbtn">Save </button>
							</div>
						</div>
					</div>
				</form>
			</div>

			<!--Model for Delete -->
			<div id="deleteModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">            
								<h4 class="modal-title">Delete User</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div class="modal-body">
								<input type="hidden"  name="id_d" class="form-control" id="id_d">          
								<p>Are you sure you want to delete these Records?</p>
							</div>
							<div class="modal-footer">
								<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
								<button type="button" class="btn btn-danger" id="deletebtn">Delete</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<!--Insert Message -->
			<div id="insertMsgModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>  
							<div class="modal-header">            
								<h4 class="modal-title">Insert Message</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div class="modal-body">    
								<input type="text" class="noborder" id="insertmsg"> 
							</div>
							<div class="modal-footer">
								<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
							</div>
						</form>
					</div>
				</div>
			</div>

			<!--Delete Message -->
			<div id="deleteMsgModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">            
								<h4 class="modal-title">Delete Message</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div class="modal-body">        
								<p>Your Record Successfully Deleted...</p>
							</div>
							<div class="modal-footer">
								<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
							</div>
						</form>
					</div>
				</div>
			</div>

			<!--Upadte Message -->
			<div id="updateMsgModal" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<form>
							<div class="modal-header">            
								<h4 class="modal-title">Update Message</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
							</div>
							<div class="modal-body">     
								<input type="text" class="noborder" id="updatemsg"> 
							</div>
							<div class="modal-footer">
								<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>

