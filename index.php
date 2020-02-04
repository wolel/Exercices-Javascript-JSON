<?php
/**
 * Voir docu sur: https://www.php.net/manual/fr/function.curl-init.php
 */
$input = $_GET['ville'];
$url = "http://api.openweathermap.org/data/2.5/weather?q=".$input."&units=metric&APPID=df33c6a5f3ff83ba9958a30a417f5d2f";
//$url = "http://api.openweathermap.org/data/2.5/forecast?q=charleroi&units=metric&APPID=df33c6a5f3ff83ba9958a30a417f5d2f";



//echo json_encode($url);



$ch = curl_init();

// configuration des options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);


/*
if(curl_exec($ch) === false)
{
    echo 'Erreur Curl : ' . curl_error($ch);
}
else
{
    echo 'L\'opération s\'est terminée sans aucune erreur';
}
*/
// exécution de la session
curl_exec($ch);

// fermeture des ressources
curl_close($ch);

