const width = 400;
const height = 400;

let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
	};
	let $mapa = document.getElementById("map");
	
	let $distance = document.getElementById("distance");
	let clicks= 0;
	
	$mapa.addEventListener("click", function(e){
		clicks++;
		let distance = getDistance(e, target);
		let distancehint = getDistanceHint(distance);
		$distance.innerHTML = `<h1 style="color: white; background: black">${distancehint}</h1>`;

		if (distance < 20 ) {
		alert(`Encontraste el tesoro en in ${clicks} clicks!`);
		location.reload();
  }
});