<?php
  //laeme funktsiooni failis
	require_once("functions.php");

	//kontrollin, kas kasutaja on sisseloginud
	if(!isset($_SESSION["id_from_db"])){
		// kui on,suunan data lehele
		header("Location: login.php");
		exit();
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Test</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="game.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="game.js"></script>
  <script src="bootbox.min.js"></script>

</head>
<body>
<div class="page-header">
  <p name="alertEvent" id="alertEvent"></p>
  <li class="menu-item"><a href="logout.php" class="menu-link">Logi välja</a></li>
</div>
<div id="data">
	<div class="data">
		<h1>Andmed</h1>
			<ul>
				<li><p id="wood"></p></li>
				<li><p id="materials"></p></li>
				<li><p id="roomForWood"></p></li>
				<li><p id="axe"></p></li>
				<li><p id="roomHeat"></p></li>
			<ul>
	</div>
<div class="container-fluid">
  <div class="container">
  
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home" onclick="clearEventAlert()";>Kodu</a></li>
    <li><a data-toggle="tab" href="#menu1" onclick="clearEventAlert()";>Kuur</a></li>
    <li><a id="tab2" data-toggle="tab" href="#menu2" style="display: none;" onclick="clearEventAlert()">Töökoda</a></li>
    <li><a id="tab3" data-toggle="tab" href="#menu3" style="display: none;" onclick="clearEventAlert()">Laut</a></li>
	<br><br><br><img src="img/stage1.png" id ="yourHome" alt="My home">
  </ul>
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>Kodu</h3>
		<button id="heat" type="button" class="btn btn-success">Küta kaminat</button>
		<button id="ahi" type="button" class="btn btn-success">Tee süüa</button>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3 id="gSize"></h3>
	  <button id="puu" type="button" class="btn btn-success">Lõhu puid</button>
	  <input type="button" value="Valmista materjali (3 puitu)"id="craftMaterial" type="button" class="btn btn-success"></input>
	  <input type="button" value="Suurenda kuuri (10 materjali)" id="buildGarageButton" type="button" class="btn btn-success" disabled></input>
	  <input type="button" value="Ehita töökoda (10 puitu)" id="buildWorkShop" type="button" style="display: none;" class="btn btn-success" disabled></input>
	  <input type="button" value="Ehita laut" id="buildBarnButton" type="button" style="display: none;" class="btn btn-success" disabled></input>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Valik 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Valik 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
	<div id="alert">
		<p name="alert" id="alert"></p>
	</div>
	<!--<div class="alert alert-success" id="twoMoreTrees">
    <button type="button" class="close" data-dismiss="alert">x</button>
    <strong>Success! </strong>
    Said 2 halgu rohkem.
</div>!-->
  </div>
</div>
</div>

</body>
</html>