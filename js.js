function scroll(position){
	var msg = "Diana Kris Navarro";
	var curr= "";
	var sc = document.getElementById("myName");

	for(var i=0;i<=position;i++){
		curr += msg.charAt(i);
	}
	sc.innerHTML = curr;
	positionr++;

	if (position != msg.length) {
		window.setTimeout(function() { scroll(position); }, 50);
	}
	else {
		window.setTimeout(function() { scroll(0); }, 2000);
	}
}
scroll(0);
