var faxes = {
	66818302: "Høvik Legesenter",
	66818304: "Son Legekontor",
	66818305: "Linderudklinikken",
	66818306: "Medico",
	66818307: "Bjønneslegene",
	66818308: "Ski Plexus",
	66818309: "Bjørnsletta",
	66818311: "Gulset",
	66818312: "AS Legekontor",
	66818313: "Auli",
	66818314: "Brunstad",
	66818315: "Bryn Senter",
	66818316: "Brynklinikken",
	66818317: "Sentrum Legekontor Skien",
	66818318: "Humana Sandvika",
	66818319: "Moelv Legesenter",
	66818320: "Ytre Strandvei",
	66818323: "Lille Grensen",
	66818324: "Mørkved Legesenter",
	66818325: "Horten Legesenter",
	66818327: "Tomsdalen Legesenter",
	66818328: "Utsikten Legesenter",
	66818329: "Åsgårdstrand - Sjur Larsen",
	66818330: "Sentrum Legekontor Horten",
	66818331: "Gloppen, PS",
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
	66818342: "Legene i Nygaardsgata",
	66818343: "Vindafjord Legesenter",
	66818344: "Holbergate Legesenter",
	66818345: "Utmarkveien Legekontor",
	66818346: "Vestbytorget Legesenter",
	66818347: "Rykkin Legekontor",
	66818348: "Brugata Legesenter",
	66818349: "Landsbylegene",
	66818351: "Fredholt Legesenter",
	66818352: "Rosenlund Legesenter",
	66818354: "Madlatunet Legesenter",
	66818355: "Legene på Sundvollen",	
	66818356: "Trekanten Legesenter",
	66818357: "Sentrumsgården Legekontor",
	66818358: "Norabakken Lege og Kiropraktorklinikk",
	66818359: "Seaside Klinikken",
	66818360: "Familielegen",
	66818361: "Legene Sentrum Vest",
	66818362: "Geithus Helsesenter",
	66818363: "Tromøy Legesenter",
	66818364: "Moland Legesenter",
	66818365: "Ankerløkka Legesenter",
	66818366: "Legegruppen Kongsberg",
	66818367: "Huseby Legesenter",
	66818368: "Landås Legesenter",
	66818369: "Bergen Vest Legesenter",
	66818370: "Skotselv Legesenter",
	66818371: "Sentrum Legesenter Kristiansund",
	66818372: "Stokke Legesenter",
	66818373: "Gladbakk Legesenter",
	66818374: "Cort Pill Helsesenter",
	66818375: "Høybråten Legekontor",
	66818376: "Vestskogen Medisinske Senter",
	66818377: "Din Doktor",
	66818378: "Vågen Legesenter Kristiansund",
	66818379: "Hegdehaugen Legesenter",
	66818380: "Strømmen Legesenter"};
var fax_install = {
	66818300: "Hosting, Odensee",
	66818301: "Hosting, Odensee"};

fax_state={}
var statusList = document.getElementsByClassName("status");
for (i=0;i<statusList.length;i++){
	if (statusList[i].className.indexOf("red") != -1) {	
		fax_state[statusList[i].innerHTML]="red";
	}
	else if (statusList[i].className.indexOf("green") != -1) {	
		fax_state[statusList[i].innerHTML]="green";
	}
}

function postMessageToSlack(text,channel){
					    var xmlhttp = new XMLHttpRequest(),
					        webhook_url = "https://hooks.slack.com/services/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",
					        myJSONStr= 'payload= {"username": "FAX", "icon_emoji": ":fax:", "channel": "'+channel+'", "text": "'+text+'"}';
					    xmlhttp.open('POST', webhook_url, false);
					    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					    xmlhttp.send(myJSONStr);
					}

setInterval(function(){
	setTimeout(function(){
		var red = document.getElementsByClassName("red");
		for (i = 0; i < red.length; i++){
			for (var fax in faxes){
				if (red[i].innerHTML.indexOf(fax) != -1){
					red[i].style.backgroundColor="blue";
					for (var fax in faxes) {
					if (red[i].innerHTML.indexOf(fax) != -1){
						red[i].innerHTML = faxes[fax] + "<br>" + fax;
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
			//Only for me
			for (var fax in fax_install){
				if (red[i].innerHTML.indexOf(fax) != -1){
					red[i].innerHTML = fax_install[fax] + "<br>" + fax;
					red[i].style.backgroundColor="brown";
					red[i].style.fontSize="small"
				}
			}
		}
	},2000);

	var statusCheck = document.getElementsByClassName("status");
	for (i = 0; i < statusCheck.length; i++) {
		for (var state in fax_state) {
			if (statusCheck[i].innerHTML.indexOf(state) != -1) {
				if (statusCheck[i].className.indexOf(fax_state[state]) == -1) {
					console.log("change occured");
					if (!faxes[state]) {
						if (statusCheck[i].className.indexOf("red") != -1) {
							fax_state[state] = "red";
							postMessageToSlack(state + " DOWN!","@fiha");
							postMessageToSlack(state + " DOWN!","#cx");
						}
						else if (statusCheck[i].className.indexOf("green") != -1) {
							fax_state[state] = "green";
							statusCheck[i].style.backgroundColor="#2ecc71";
							statusCheck[i].innerHTML = faxes[statusCheck[i].innerHTML] + "<br>" + statusCheck[i].innerHTML;
							statusCheck[i].style.fontSize="small";
							postMessageToSlack(state + " UP!","@fiha");
							postMessageToSlack(state + " UP!","#cx");
						}
					}
					else {
						if (statusCheck[i].className.indexOf("red") != -1) {
							fax_state[state] = "red";
							postMessageToSlack(faxes[state] + " DOWN!","@fiha");
							postMessageToSlack(faxes[state] + " DOWN!","cx");
						}
						else if (statusCheck[i].className.indexOf("green") != -1) {
							fax_state[state] = "green";
							statusCheck[i].style.backgroundColor="#2ecc71";
							statusCheck[i].innerHTML = faxes[statusCheck[i].innerHTML] + "<br>" + statusCheck[i].innerHTML;
							statusCheck[i].style.fontSize="small";
							postMessageToSlack(faxes[state] + " UP!","@fiha");
							postMessageToSlack(faxes[state] + " UP!","#cx");
						}
					}
				}
			}
		}
	}
},3000);
