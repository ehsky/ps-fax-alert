var faxes = {66818304: "Son Legekontor",
	   66818302: "Høvik Legesenter",
	   66818305: "Linderudklinikken",
	   66818306: "Bjønneslegene"};

var li = document.getElementsByTagName("li");
for (i=0; i < li.length; i++) {
	for (var fax in faxes) {
		if (li[i].innerHTML.indexOf(fax) != -1){
			li[i].innerText = faxes[fax] + "\n" + fax;
		}
	}
}

setInterval(function(){
	setTimeout(function(){
		var red = document.getElementsByClassName("red");
		for (i = 0; i < red.length; i++){
			for (var fax in faxes){
				if (red[i].innerHTML.indexOf(fax) != -1){
					red[i].style.backgroundColor="blue";
				}
			}
		}
	},1000);
	setTimeout(function(){
		var red = document.getElementsByClassName("red");
		for (i = 0; i < red.length; i++){
			for (var fax in faxes){
				if (red[i].innerHTML.indexOf(fax) != -1){
					red[i].style.backgroundColor="red";
				}
			}
		}
	},2000);
},3000);

setInterval(function(){
	var red = document.getElementsByClassName(“red”);
	for (var i=0; i < red.length; i++) {
		if (red[i].innerHTML == “66818304") {
			alert(“Son Legekontor is down!!!“);
			}
		if (red[i].innerHTML == “66818302”) {
			alert(“Høvik Legesenter is down!!!“);
			}
		   if (red[i].innerHTML == “66818305”) {
			alert(“Linderudklinikken is down!!!“);
			}
		   if (red[i].innerHTML == “66818306”) {
			alert(“Medico is down!!!“);
			}
		   if (red[i].innerHTML == “66818307”) {
			alert(“Bjønneslegene is down!!!“);
			}
		   if (red[i].innerHTML == “66818308”) {
			alert(“Ski Plexusklinikken is down!!!“);
			}
		   if (red[i].innerHTML == “66818309”) {
			alert(“Bjørnsletta is down!!!“);
			}
		   if (red[i].innerHTML == “66818310”) {
			alert(“Gaula is down!!!“);
			}
		   if (red[i].innerHTML == “66818311”) {
			alert(“Gulset is down!!!“);
			}
		   if (red[i].innerHTML == “66818312”) {
			alert(“As Legekontoret is down!!!“);
			}
		   if (red[i].innerHTML == “66818313”) {
			alert(“Auli is down!!!“);
			}
		   if (red[i].innerHTML == “66818314”) {
			alert(“Brunstad is down!!!“);
			}
		   if (red[i].innerHTML == “66818315”) {
			alert(“Bryn Senter is down!!!“);
			}
			if (red[i].innerHTML == “66818316”) {
			alert(“Brynklinikken is down!!!“);
			}
			if (red[i].innerHTML == “66818317”) {
			alert(“Sentrum Legekontor Skien is down!!!“);
			}
			if (red[i].innerHTML == “66818319”) {
			alert(“Moelv Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818320”) {
			alert(“Ytre Strandvei is down!!!“);
			}
			if (red[i].innerHTML == “66818323”) {
			alert(“Lille Grensen is down!!!“);
			}
			if (red[i].innerHTML == “66818324”) {
			alert(“Mørkved Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818325”) {
			alert(“Horten Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818327”) {
			alert(“Tromsdalen Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818328”) {
			alert(“Utsikten Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818329”) {
			alert(“Åsgårdstrand - Sjur R. Larsen is down!!!“);
			}
			if (red[i].innerHTML == “66818330”) {
			alert(“Sentrum Legekontor Horten is down!!!“);
			}
			if (red[i].innerHTML == “66818331”) {
			alert(“Gloppen is down!!!“);
			}
			if (red[i].innerHTML == “66818332”) {
			alert(“Skansen  Legekontor is down!!!“);
			}
			if (red[i].innerHTML == “66818333”) {
			alert(“Brumunddal Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818334”) {
			alert(“Mariadasans Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818335”) {
			alert(“Kråkerøy Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818336”) {
			alert(“Kystveien Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818337”) {
			alert(“Sentrum Legekontor Skarnes is down!!!“);
			}
			if (red[i].innerHTML == “66818338”) {
			alert(“Kringsjå Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818339”) {
			alert(“Legesenter Daivike is down!!!“);
			}
			if (red[i].innerHTML == “66822140”) {
			alert(“Hovfaret is down!!!“);
			}
			if (red[i].innerHTML == “66818340”) {
			alert(“Nordlyslegene is down!!!“);
			}
			if (red[i].innerHTML == “66818346”) {
			alert(“Vestbytorget Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818342”) {
			alert(“Legene i Nygaardsgata is down!!!“);
			}
			if (red[i].innerHTML == “66818343”) {
			alert(“Vindafjord Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818344”) {
			alert(“Holbergsgate Legesenter is down!!!“);
			}
			if (red[i].innerHTML == “66818345”) {
			alert(“Utmarkveien Legekontor is down!!!“);
			}
			if (red[i].innerHTML == “66818347”) {
			alert(“Rykkinn Legekontor is down!!!“);
			}
			if (red[i].innerHTML == “66818348”) {
			alert(“Brugata Legsenter is down!!!“);
			}
			if (red[i].innerHTML == “66818349”) {
			alert(“Landsbylegene is down!!!“);
			}
            if (red[i].innerHTML == “66818351”) {
			alert(“Fredholt Legesenter is down!!!“);
			}
        if (red[i].innerHTML == “66818352”) {
			alert(“Rosenlund Legesenter is down!!!“);
			}
        if (red[i].innerHTML == “66818353”) {
			alert(“Svensedammen Legesenter is down!!!“);
			}
		}
}, 60000);
