var faxes = {66818304: "Son Legekontor",
	   66818302: "Høvik Legesenter",
	   66818305: "Linderudklinikken",
	   66818306: "Medico",
	    66818307: "Bjønneslegene",
	    66818308: "Ski Plexus",
	    66818308: "Bjørnsletta",
	    66818310: "Gaula",
	    66818311: "Gaulset",
	    66818312: "AS Legekontor",
	    66818312: "Auli",
	    66818314: "Brunstad",
	    66818315: "Bryn Senter",
	    66818316: "Brynklinikken",
	    66818317: "Sentrum Legekontor Skien",
	    66818319: "Moelv Legesenter",
	    66818320: "Ytre Strandvei",
	    668183823: "Lille Grensen",
	    668183824: "Mørkved Legesenter",
	    66818325: "Horten Legesenter",
	    66818327: "Tomsdalen Legesenter",
	    66818328: "Utsikten Legesenter",
	    66818329: "Åsgårdstrand - Sjur Larsen",
	    66818330: "Sentrum Legekontor Horten",
	    66818331: "Gloppen",
	    66818332: "Skansen Legekontor",
	    66818333: "Brummunddal Legesenter",
	    66818334: "Mariadasans Legesenter",
	    66818335: "Kråkerøy Legesenter"};

var li = document.getElementsByClassName("status");
for (i=0; i < li.length; i++) {
	for (var fax in faxes) {
		if (li[i].innerHTML.indexOf(fax) != -1){
			li[i].innerHTML = faxes[fax] + "\n" + fax;
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
