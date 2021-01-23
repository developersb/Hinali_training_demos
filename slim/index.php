<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <!--for icon -->
		<script src="slim/js/ajax.js"></script>
		<link rel="stylesheet" href="slim/css/style.css">
	</head>
	<body>
		<div id="loader" class="center"></div> 
		<div class="b1">
	    	<div class="container-fluid innerbody">
	    		 <div class="alert alert-danger alert-dismissible"> 
	    			 <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		       		<p id="message">  </p>
		    	</div> 
		    	<div class="row titlerow">
		    		<div class="col-sm-6 col-xl-6">
		    			<h5 class="subtitle"> Employee List </h5>
		    		</div>
		    		<div class="col-sm-6 col-xl-6">
		    			<h5 class="add"> <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fa fa-plus-circle" style="font-size:18px"></i></a> 
		    			<a href="JavaScript:void(0);" class="btn btn-danger" id="delete_multiple"><i class="fa fa-trash" style="font-size:18px"></i><span></span></a>	</h5>
		    		</div>
		    	</div>
		    	
					  <div class="row">
					    <div class="col-sm-12 showsearchrow">
					      <div class="pull-right">
					        <div class="dataTables_filter" id="DataTables_Table_0_filter">
					          <label><input type="text" aria-controls="DataTables_Table_0" placeholder="Search" class="form-control input-sm" id="search"></label>
					        </div>
					      </div>
					      <div class="pull-left">
					        <div id="records1" class="dataTables_length">
					            <form method="POST" id="show">
						            <label>Show 
						            <select size="1" name="records" id="records" aria-controls="DataTables_Table_0" class="form-control input-sm">
						              <option value="5">5</option>
						              <option value="10">10</option>
						              <option value="20">20</option>
						              <option value="25">25</option>
						            </select> Rows </label>
					          </form>
					          </div>
					        </div>
					        <div class="clearfix"></div>
					        <div class="table-responsive">
							<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline" role="grid">
					        <table class="table table-striped table-hover" border="1">
				                <thead>
				                    <tr>
										<th>
											
										</th>
										<th>SL NO</th>
				                        <th>FIRSTNAME <br> <a href="" class="assfnm"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desfnm"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>LASTNAME <br> <a href="" class="asslnm"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="deslnm"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>GENDER <br> <a href="" class="assgen"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desgen"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>BIRTHDATE <br> <a href="" class="assbdate"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desbdate"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>CITY <br><a href="" class="asscity"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="descity"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>MOBILE NO. <br> <a href="" class="assmno"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desmno"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>EMAIL <br><a href="" class="assemail"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desemail"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
										<th>DESIGNATION <br><a href="" class="assdesi"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desdesi"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
										<th>SALARY <br> <a href="" class="asssal"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="dessal"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
										<th> QUALIFICATION <br> <a href="" class="assquali"> <i class="fa fa-arrow-up" style="font-size:15px"></i></a><a href="" class="desquali"><i class="fa fa-arrow-down" style="font-size:15px"></i></a></th>
				                        <th>ACTION </th>
				                    </tr>
				                </thead>
					        	<tbody>
					        	</tbody>
							</table>
							</div>
					    </div>
							<div class="footerslim">
							<div class="conatiner-fluid">
								<div class="row">
									<div class="col-sm-6 col-xl-6 col-md-6">
										<div class="inline">
											<lable id="enteries">  </label>     
										</div>
									</div>
									<div class="col-sm-6 col-xl-6 col-md-6">
										<div class="pagination" id="pagination">  
										</div> 
									</div>
								</div>
							</div>
						</div>
					      
					 </div> 
		    	</div>
		    </div>
		    
		</div>
	</div>

		<!--Insert Modal -->
		<div id="addEmployeeModal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<form id="user_form" method="POST" enctype="multipart/form-data" name="user_form">
						<div class="modal-header">						
							<h4 class="modal-title">Add Employee</h4>
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="close1">×</button>
						</div>
						<div class="modal-body">
								<div class="form-group">
									<div class="container-fluid">
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>FIRST NAME</label>
												<input type="text" class="form-control ClassRequire" name="fname" id="fname">
												<span class="error"><p id="fname_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>LastName:</label>
												<input type="text" class="form-control ClassRequire" name="lname" id="lname">
												<span class="error"><p id="lname_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6 textcenter">
												<label>Gender:</label>
												<div class="form-check form-check">
					                              <input class="form-check-input" type="radio" id="male" value="Male" name="gender">
					                              <label class="form-check-label labelfield" for="male">Male</label>
					                            </div>
												<div class="form-check form-check-inline">
													<input type="radio" class="form-check-input"  value="Female" name="gender" id="female">
													 <label class="form-check-label labelfield" for="female">Female</label>
												</div>
												<span class="error"><p id="gender_error"></p></span>
											</div> 
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Birthdate:</label>
												<input type="date" class="form-control ClassRequire" name="bdate" id="bdate" > 
												<span class="error"><p id="bdate_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Email:</label>
												<input type="email" class="form-control ClassRequire" name="email" id="email" > 
												<span class="error"><p id="email_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Mobile No.:</label>
												<input type="number" class="form-control ClassRequire" name="mno"  id="mno"> 
												<span class="error"><p id="mno_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>City:</label>
												<select class=" form-control ClassRequire" name="city" id="city" >
													<option>Rajkot</option>
													<option>Ahmedabad</option>
													<option>Gandhinagar</option>
												</select>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Designation:</label>
												<select class=" form-control ClassRequire" name="desi" id="desi" >
													<option>Manager</option>
													<option>Worker</option>
													<option>Superviser</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Salary:</label>
												<input type="number" class="form-control ClassRequire" name="salary" id="salary" > 
												<span class="error"><p id="sal_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Qualification:</label>
												<div class="form-check form-check">
													<input type="checkbox" class="form-check-input" value="MCA" name="quali" id="mca"  >
													<label class="form-check-label lblbtn">MCA</label>
												</div>
												<div class="form-check form-check-inline">
												  <input type="checkbox" class="form-check-input"  value="MBA" name="quali" id="mba">
												  <label class=" form-check-label lblbtn">MBA</label>
												</div>
												<span class="error"><p id="quali_error"></p></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						<div class="modal-footer">
						    <input type="hidden" value="1" name="type">
							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" id="cancel">
							<button type="button" class="btn btn-success" id="btn-add">Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<!-- Edit Modal HTML -->
		<div id="editEmployeeModal" class="modal fade" >
			<div class="modal-dialog">
				<div class="modal-content">
					<form id="update_form" method="POST" enctype="multipart/form-data" name="update_form">
						<div class="modal-header">						
							<h4 class="modal-title">Edit User</h4>
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeu">×</button>
						</div>
						<div class="modal-body">
							<div class="modal-body">
								<div class="form-group">
									<div class="container-fluid">
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>FIRST NAME</label>
												<input type="hidden" id="id_u" name="id" class="form-control" required>
												<input type="text" class="form-control" name="fname_u" id="fname_u" required>
												<span class="error"><p id="fnameu_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>LastName:</label>
												<input type="text" class="form-control" name="lname_u" id="lname_u" required>
												<span class="error"><p id="lnameu_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6 textcenter">
												<label>Gender:</label>
												<div class="form-check form-check">
													<input type="radio"  class="form-check-input"  value="Male" name="gender_u" id="male_u" checked>
													<label class="form-check-label">Male</label>
												</div>
												<div class="form-check form-check-inline">
													<input type="radio" class="form-check-input"  value="Female" name="gender_u" id="female_u">
													<label class="form-check-label">Female</label>
												</div>
												<span class="error"><p id="genderu_error"></p></span>
											</div> 
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Birthdate:</label>
												<input type="date" class="form-control" name="bdate_u" id="bdate_u" required> 
												<span class="error"><p id="bdateu_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Email:</label>
												<input type="email" class="form-control" name="email_u" id="email_u" required> 
												<span class="error"><p id="emailu_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Mobile No.:</label>
												<input type="text" class="form-control" name="mno_u"  id="mno_u" required> 
												<span class="error"><p id="mnou_error"></p></span>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>City:</label>
												<select class=" form-control" name="city_u" id="city_u" required>
													<option>Rajkot</option>
													<option>Ahmedabad</option>
													<option>Gandhinagar</option>
												</select>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Designation:</label>
												<select class=" form-control" name="desi_u" id="desi_u" required>
													<option>Manager</option>
													<option>Worker</option>
													<option>Superviser</option>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Salary:</label>
												<input type="number" class="form-control" name="salary_u" id="salary_u" required> 
												<span class="error"><p id="salu_error"></p></span>
											</div>
											<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-xl-6">
												<label>Qualification:</label>
												<div class="form-check form-check">
													<input type="checkbox" class="form-check-input" value="MCA" name="quali_u" id="mca_u">
													<label class="form-check-label">MCA</label>
												</div>
												<div class="form-check form-check-inline">
												  <input type="checkbox" class="form-check-input"  value="MBA" name="quali_u" id="mba_u">
												  <label class=" form-check-label ">MBA</label>
												</div>
												<span class="error"><p id="qualiu_error"></p></span>
											</div>
										</div>
									</div>
								</div>				
							</div>
							<div class="modal-footer">
							<input type="hidden" value="2" name="type">
								<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" id="cancelu">
								<button type="button" class="btn btn-info" id="update"  data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Record">Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- Delete Modal HTML -->
		<div id="deleteEmployeeModal" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<form>
						<div class="modal-header">						
							<h4 class="modal-title">Delete User</h4>
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						</div>
						<div class="modal-body">
							<input type="text" id="id_d" name="id" class="form-control">					
							<p>Are you sure you want to delete these Records?</p>
							<p class="text-warning"><small>This action cannot be undone.</small></p>
						</div>
						<div class="modal-footer">
							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
							<button type="button" class="btn btn-danger" id="delete">Delete</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</body>
</html> 