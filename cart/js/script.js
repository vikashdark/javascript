function plus(){
	let val = document.getElementById('qty').value;
	val++;
	document.getElementById('qty').value = val;
	totla();
}

function minus(){
	let val = document.getElementById('qty').value;
	if(val > 1){
		val--;
		document.getElementById('qty').value = val;
		totla();
	}
}
function totla(){
	let val = document.getElementById('qty').value;
	let prc = document.getElementById('prc').value;
	let pricetl = val*prc;
	document.getElementById('tl').innerHTML = pricetl;
}