var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
if (this.readyState === 4 && this.status === 200){
    console.log(this.responseText);
    var json = JSON.parse(this.responseText);

    document.getElementById('date').innerHTML = DateDuJour (date)+" " + date.getDate()+" " +(NomDuMois(date))+" "+date.getFullYear();
    //document.getElementById('ville').innerHTML = "Ville: "+ json.name;
    document.getElementById('temp_actuelle').innerHTML = "température actuelle: " + Math.round(json.main.temp);

    document.getElementById('temp_max').innerHTML = "Température max: "+ Math.round(json.main.temp_max)+ "°C";
    document.getElementById('temp_min').innerHTML = "Température max: "+ Math.round(json.main.temp_min)+ "°C";
    document.getElementById('pres').innerHTML = "Pres Atmosferique: "+ Math.round(json.main.pressure);
    document.getElementById('wind').innerHTML = "Vitesse du vent: "+ Math.round(json.main.speed) + "km/h";
    document.getElementById('humidite').innerHTML = "Humidité: "+ Math.round(json.main.humidity) + "%";


}
};
xhttp.open('GET', "index.php?ville="+input,true);
xhttp.send();