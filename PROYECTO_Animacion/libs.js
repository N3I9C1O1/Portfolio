let getRandomNumber = size => {

		return Math.floor(Math.random() * size);
		
		}
		
	let getDistance = (e, target) => {
	let difx = e.offsetX - target.x;
	let dify = e.offsetY - target.y;
	return Math.sqrt((difx * difx) + (dify * dify));
	
	
	}
	
	let getDistanceHint = distance => {
	if (distance < 30) {
	return "Hirviendo"
	} else if  (distance < 40){
	return "Muy caliente"
	} else if  (distance < 60) {
	return "Caliente"
	}else if (distance <100){
	return "Calido"
	} else if (distance <180){
	return "Frio"
	}else if (distance < 360){
	return "Realmente frio"
	}else {
	return "Helado"
	}
}