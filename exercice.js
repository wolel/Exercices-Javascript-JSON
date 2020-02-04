
var name = document.getElementById('ville');
var btn = document.getElementById('btn_ville');


function start() {

    var input = document.getElementById('ville').value;

    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    xhttp.onreadystatechange = function () {
        console.log(input +'OK bien recu !');

        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText);


            var json = JSON.parse(this.responseText);
            console.log(json);
            let date = new Date( json.timezone*1000);

                document.getElementById('date').innerHTML = date;
                document.getElementById('ville').innerHTML = "Ville: " + json.name;
                document.getElementById('tempMax').innerHTML = "Température max : " + Math.round(json.main.temp_max) + "°C";
                document.getElementById('tempMin').innerHTML = "Température min : " + Math.round(json.main.temp_min) + "°C";
                document.getElementById('pressAtm').innerHTML = "Pression atmosphérique : " + json.main.pressure + " Pa";
                document.getElementById('wind').innerHTML = "Vitesse du vent : " + json.wind.speed + " km/h";
                document.getElementById('humidite').innerHTML = "Humidité : " + json.main.humidity + " %";





        }
    };

    xhttp.open('GET', "index.php?ville=" +input, true);
    console.log(xhttp.open);
    xhttp.send();
}
    btn.addEventListener('click', start);