<html>
<head>
		<script src="oops/js/ajax.js"></script>
		<link rel="stylesheet" href="oops/css/style.css">
</head>
<body>
	<div id="loader" class="center"></div> 
	<div class="main-div">
		<div class="alert alert-danger alert-dismissible"> 
	    			 <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		       		<p id="message"> Hello </p>
		    	</div> 
		<div class="header">
			<center> <h1> Welcome User! </h1> </center>
		</div>
		<div class="add">
			<h5> <a href="#checkurlmodal" class="btn addbtn" data-toggle="modal"><i class="fa fa-plus" style="font-size:18px">  ADD</i></a> </h5>
		</div>
		<div class="table-responsive">
			<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline" role="grid">
				<div class="row">
				    <div class="col-sm-12 showsearchrow">
						<table class="table table-striped table-hover" border="1">
							<thead>
								<tr>
									<th>NO</th>
								    <th> URL </th>
								    <th>STATUS CODE </th>
								    <th>LAST CHECK TIME </th>
								    <th>CHECK/VISIT</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!--Modal -->
	<div id="checkurlmodal" class="modal fade" >
		<div class="modal-dialog">
			<div class="modal-content">
				<form id="check_url" method="POST" enctype="multipart/form-data" name="check_url">
					<div class="modal-header">						
						<h4 class="modal-title">Check URL</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="closeu">×</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label>URL</label>
							<input type="text" class="form-control" name="url" id="url" required>
							<span class="error"><p id="url_error"></p></span> </td>
						</div>				
					</div>
					<div class="modal-footer">
						<input type="hidden" value="2" name="type">
							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" id="cancelu">
							<button type="button" class="btn btn-info" id="check">CHECK</button>
						</div>
					</form>
				</div>
			</div>
		</div>
</body>
</html>