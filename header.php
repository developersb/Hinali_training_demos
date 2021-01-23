<html>
<head>
  <link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>

<nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <img src="Images/logo.png" class=""> </img>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#" id="home">HOME</a></li>
            
            <?php 
              session_start();
              if ($_SESSION['name'] == '') { ?>
                <ul class="nav navbar-nav navbar-right">
                  <li> <button class="active1 signup"> SIGN UP </button></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li> <button class="active1 login" id="loginbtn"> LOG IN</button></li>
                </ul>
            <?php
              } else {
            ?>
            <li class="active"><a href="#" id="curl">CURL</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">LAYOUT <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" id="layout1">Layout 1</a></li>
                <li><a href="#" id="layout2">Layout 2</a></li>
                <li><a href="#" id="layout3">Layout 3</a></li>
                <li><a href="#" id="layout4">Layout 4</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">JQUERY <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" id="cval">Class Validation</a></li>
                <li><a href="#" id="meval">Method Validation</a></li>
                <li><a href="#" id="cusval">Custom Validation</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">CRUD <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" id="slim">SLIM</a></li>
                <li><a href="#" id="oops">OOPS</a></li>
              </ul>
            </li>
              <ul class="nav navbar-nav navbar-right">
              <li><a herf="logout.php">  <button class="active1 logout"> LOGOUT </button> </a></li>
            </ul>
             <?php }
            ?>
          </ul>
        </div>
      </div>
    </nav>
  </html>
</body>