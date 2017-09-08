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
	    66818335: "Kråkerøy Legesenter",
	    66818336: "Kystveien Legesenter",
	    66818337: "Sentrum Legekontor",
	    66818338: "Kringsjå Legesenter",
	    66818339: "Legesenter Daivike",
	    66822140: "Hovfaret",
	    66818340: "Nordlyslegene",
	    66818346: "Vestbytorget Legesenter",
	    66818342: "Legene i Nygaardsgata",
	    66818343: "Vindafjord Legesenter",
	    66818344: "Holbergate Legesenter",
	    66818345: "Utmarkveien Legekontor",
	    66818347: "Rykkin Legekontor",
	    66818348: "Brugata Legesenter",
	    66818349: "Landsbylegene",
	    66818351: "Fredholt Legesenter",
	    66818352: "Rosenlund Legesenter",
	    66818353: "Svensedammen Legesenter"};


setInterval(function(){
	setTimeout(function(){
		var red = document.getElementsByClassName("red");
		for (i = 0; i < red.length; i++){
			for (var fax in faxes){
				if (red[i].innerHTML.indexOf(fax) != -1){
					red[i].style.backgroundColor="blue";
					for (var fax in faxes) {
					if (red[i].innerHTML.indexOf(fax) != -1){
						red[i].innerHTML = faxes[fax] + "\n" + fax;
						red[i].style.fontSize="small";
						}
					}
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

