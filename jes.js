var roomForWood = 30;
var wood = 0;
var woodTotal = 0;
var clicksOnWoodButton = 0;
var materials = 0;
//var garageButton = 0;
var garageCost = 10;
var garage = 0;
var workShop = 0;
var axe = 0;
var woodGain = 0;
var axes = ["Puidust", "Kivist", "Rauast", "Metallist", "Hõbedast", "Kullast", "Teemantist", "Jänesest"];
window.onload = function(){
	document.getElementById('puu').addEventListener('click', addWood);
	document.getElementById('buildGarageButton').addEventListener('click', buildGarage);
	document.getElementById('craftMaterial').addEventListener('click', addMaterials);
	document.getElementById('buildWorkShop').addEventListener('click', buildWorkShop);
	//document.getElementById('active').addEventListener('click', clearEventAlert);
	document.getElementById("gSize").innerHTML = "Kuur ("+garage+")";
	document.getElementById("wood").innerHTML = "Puitu: "+wood;
	document.getElementById("materials").innerHTML = "Materjale: "+materials;
	document.getElementById("roomForWood").innerHTML = "Kuuri mahutavus: "+roomForWood+" ühikut";
	document.getElementById("axe").innerHTML = "Kirves: "+axes[axe];
	
	//btn.onClick = addWood();
}
function addWood(){
	if(wood >= roomForWood){
		console.log("Ei mahu!")
		document.getElementById("alert").innerHTML = "Kuuri ei mahu rohkem puid!";
	}else{
		var chance = randomInt(1, 11);
		console.log(chance)
		if(chance === 1 || chance === 2 ){
			wood = wood + axe + 2
			woodTotal = woodTotal + axe + 2
			console.log("said 2 puuhalgu rohkem");
			woodGain = axe + 2
			document.getElementById("alert").innerHTML = "Said "+woodGain+" puuhalgu";
			
		}else if(chance === 3){
			wood = wood + axe + 3
			woodTotal = woodTotal + axe + 3
			console.log("said 3 puuhalgu rohkem");
			woodGain = axe + 3
			document.getElementById("alert").innerHTML = "Said "+woodGain+" puuhalgu";
		}else{
		wood = wood + axe + 1
		woodTotal = woodTotal + axe + 1
		woodGain = axe + 1
		document.getElementById("alert").innerHTML = "Said "+woodGain+" puuhalgu";
		}
	document.getElementById("wood").innerHTML = "Puitu: "+wood;
	document.getElementById("materials").innerHTML = "Materjale: "+materials;
	clicksOnWoodButton = clicksOnWoodButton + 1;
		//console.log(wood)
		
	}
	if(clicksOnWoodButton === 10){
		axe = axe+1;
		document.getElementById("buildAe").style = "display: inline;";
		document.getElementById("buildAe").disabled = false;
		document.getElementById("alertEvent").innerHTML ="Leidsid "+"<strong>"+"kirve";
		document.getElementById("axe").innerHTML = "Kirves: "+axes[axe];
		setTimeout(clearEventAlert, 3000);
		
	}
}
function addMaterials(){
	if(wood >= 3){
		materials = materials + 1;
		wood = wood - 3
		document.getElementById("materials").innerHTML = "Materjale: "+materials;
		document.getElementById("wood").innerHTML = "Puitu: "+wood;
		console.log(materials);
	}else{
		document.getElementById("alert").innerHTML = "Sul ei ole materjalide töötlemiseks piisavalt puitu!";
	}
	if(materials >= garageCost){
		
		document.getElementById("buildGarageButton").disabled = false;
	}
}
function buildGarage(){
	materials = materials - garageCost;
	document.getElementById("materials").innerHTML = "Materjale: "+materials;
	garage = garage + 1;
	roomForWood = roomForWood + 30 * garage;
	garageCost = garage * 10 + garageCost
	console.log(garage)
	document.getElementById("gSize").innerHTML = "Kuur ("+garage+")";
	document.getElementById("roomForWood").innerHTML = "Kuuri mahutavus: "+roomForWood;
	if(materials < garageCost){
		
		document.getElementById("buildGarageButton").disabled = true;
		document.getElementById("buildGarageButton").value = "Suurenda kuuri ("+ garageCost + " materjali)"
	}else{

		document.getElementById("buildGarageButton").disabled = false;
		document.getElementById("buildGarageButton").value = "Suurenda kuuri ("+ garageCost + " materjali)"
		console.log("puitu vaja: "+garageCost)
		console.log("Suurus: "+garage)
	}
	if(garage === 2){
		document.getElementById("buildWorkShop").style = "display: inline;";
		document.getElementById("buildWorkShop").disabled = false;
	}
}
function buildWorkShop(){
	if(wood < 10){
		document.getElementById("alert").innerHTML = "Sul ei ole töökoja ehitamiseks piisavalt puitu!";
	}else{
	wood = wood - 10;
	workShop = 1;
	document.getElementById("buildWorkShop").style = "display: none;";
	document.getElementById("tab2").style = "display: ";
	document.getElementById("materials").innerHTML = "Materjale: "+materials;
	document.getElementById("wood").innerHTML = "Puitu: "+wood;
	}
}
function randomInt(min, max) {
	
	return Math.floor(Math.random() * (max - min)) + min;
}
function clearEventAlert(){
	document.getElementById("alertEvent").innerHTML ="";
	document.getElementById("alert").innerHTML ="";
}
/*function myFunction() {
	if(garageButton == 0){
    var btn = document.createElement("BUTTON");
	var garage = document.createTextNode("Ehita garaaž");
	btn.appendChild(garage);
    document.body.appendChild(btn);
	}
}*/