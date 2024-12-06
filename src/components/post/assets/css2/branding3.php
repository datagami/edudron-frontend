<?
error_reporting(0);
session_start();

include 'config/connection.php';

//$query = $conn->query("select * from user_record where id!='' and status='accept' and visible='yes' order by id desc ");

$query = $conn->query("select * from branding_solutions where id!='' and visible='yes' ");


?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Welcome to Record Owner</title>
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link href="css/fonts.css" rel="stylesheet">

<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container-fluid top">
  <div class="container">
    <div class="row no-gutter offset-0 ">
      <div class="col-md-5 col-xs-12 ">
        <div class="logo"><a href="index.php"><img src="images/logo.png" class="img-responsive" alt="Record Owner logo"></a></div>
      </div>
      <div class="col-md-7 col-xs-12">
        <div class="main-nav">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="submit_record.php">SET A RECORD </a></li>
                  <li><a href="explore.php">EXPLORE RECORDS </a></li>
                  <? if($_SESSION['USER_ID']=='') {   ?>
                  
                  <li><a href="registration.php">CREATE ACCOUNT </a></li>
                  <li><a href="login.php">LOGIN </a></li>
                  
                  <? } else { ?>
                  
                  <li  class="dropdown"> 
				  
				  
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><?= $_SESSION['FNAME']." ".$_SESSION['LNAME'];    ?> <span class="caret"></span></a>
				<ul class="dropdown-menu">
            <li><a href="dashboard.php"> My Account </a></li>
            <li><a href="signout.php">  Log Out </a></li>
			
           
          </ul>  
				  
				 </li>
                  
                  
                  <? } ?>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


<?  $qq = $conn->query("select above_title from banner where id!=''") or die(mysql_error());

	$rrow2 = $qq->fetch_array(MYSQLI_ASSOC);

 ?>

<div class="container-fluid"><div class="row"><div class="inner-header">

<? 
while($rrow2 = $qq->fetch_array(MYSQLI_ASSOC)) {

if($rrow2['above_title']!='') { ?>

<div class="container"><div class="row no-gutter"><div class="col-md-12"><?= $rrow2['above_title'] ?></div></div></div>

<? break; }  else { continue;  }  }?>


</div></div></div>


<div class="container-fluid">
<div class="container">
<div class="row">
<div class="col-md-12">

<div class="inner">



<div class="row record-thumbs">
<h2> "World Record Holder" Short Sleeve T-Shirt</h2>




  <div class="col-sm-6 col-md-5 col-md-offset-4 ">
    <div class="thumbnail">
      <img src="images/thumbs-1.png" alt="thumbs">
      <div class="caption">
        <h3>"World Record Holder"</h3>
        <p>"Super soft, magically comfortable BELLA + CANVAS Unisex Triblend short sleeve t-shirt. This shirt will help you get into VIP rooms around the world! (Well, it MIGHT.)</p>
        <p> <a href="#" class="btn btn-default" role="button">Submit</a></p>
      </div>
    </div>
  </div>
</div>



<div class="social-icon-rec"><img src="images/social-con.jpg" alt=""></div>


<div class="more-from">
<h2> More from this collection </h2>

</div>

</div>







</div>

</div>
</div>
</div>


</div>


<? include 'footer.php'; ?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
</body>
</html>
