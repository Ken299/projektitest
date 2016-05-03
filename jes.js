var roomForWood = 30;
var wood = 0;
var woodTotal = 0;
var materials = 0;
//var garageButton = 0;
var garageCost = 10;
var garage = 0;
var workShop = 0;
var axe = 0;
window.onload = function(){
	document.getElementById('puu').addEventListener('click', addWood);
	document.getElementById('buildGarageButton').addEventListener('click', buildGarage);
	document.getElementById('craftMaterial').addEventListener('click', addMaterials);
	document.getElementById('buildWorkShop').addEventListener('click', buildWorkShop);
	
	//btn.onClick = addWood();
	
}

function addWood(){
	if(wood >= roomForWood){
		console.log("Ei mahu!")
	}else{
		var chance = randomInt(1, 11);
		console.log(chance)
		if(chance === 1 || chance === 2 ){
			wood = wood + axe + 2
			woodTotal = woodTotal + axe + 2
			console.log("said 2 puuhalgu rohkem");
		}else if(chance === 3){
			wood = wood + axe + 3
			woodTotal = woodTotal + axe + 3
			console.log("said 3 puuhalgu rohkem");
		}else{
		wood = wood + axe + 1
		woodTotal = woodTotal + axe + 1
		}
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("materials").innerHTML = materials;
		//console.log(wood)
		
	}
	if(woodTotal === 100 || woodTotal === 101 || woodTotal === 102){
		alert("Kirves!");
		axe = axe+1;
		document.getElementById("buildAe").style = "display: inline;";
		document.getElementById("buildAe").disabled = false;
	}
}
function addMaterials(){
	if(wood >= 3){
		materials = materials + 1;
		wood = wood - 3
		document.getElementById("materials").innerHTML = materials;
		document.getElementById("wood").innerHTML = wood;
		console.log(materials);
	}else{
		console.log("Sul pole piisavalt puid lõhutud!");
	}
	if(materials >= garageCost){
		
		document.getElementById("buildGarageButton").disabled = false;
	}
}
function buildGarage(){
	materials = materials - garageCost;
	document.getElementById("materials").innerHTML = materials;
	garage = garage + 1;
	roomForWood = roomForWood + 30 * garage;
	garageCost = garage * 10 + garageCost
	console.log(garage)
	if(materials < garageCost){
		
		document.getElementById("buildGarageButton").disabled = true;
		document.getElementById("buildGarageButton").value = "Suurenda kuuri ("+ garageCost + " materjali)"
	}else{

		document.getElementById("buildGarageButton").disabled = false;
		document.getElementById("buildGarageButton").value = "Suurenda kuuri ("+ garageCost + " materjali)"
		console.log("puitu vaja: "+garageCost)
		console.log("Suurus: "+garage)
	}
	if(garage === 1){
		document.getElementById("buildWorkShop").style = "display: inline;";
		document.getElementById("buildWorkShop").disabled = false;
	}
}
function buildWorkShop(){
	if(wood < 10){
		console.log("Sul ei ole piisavalt puitu!")
	}else{
	wood = wood - 10;
	workShop = 1;
	document.getElementById("buildWorkShop").style = "display: none;";
	document.getElementById("tab2").style = "display: ";
	document.getElementById("materials").innerHTML = materials;
	document.getElementById("wood").innerHTML = wood;
	}
}
function randomInt(min, max) {
	
	return Math.floor(Math.random() * (max - min)) + min;
}
/*function myFunction() {
	if(garageButton == 0){
    var btn = document.createElement("BUTTON");
	var garage = document.createTextNode("Ehita garaaž");
	btn.appendChild(garage);
    document.body.appendChild(btn);
	}
}*/