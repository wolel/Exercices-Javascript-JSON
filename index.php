<?php
/**
 * Voir docu sur: https://www.php.net/manual/fr/function.curl-init.php
 */

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://home.openweathermap.org/");

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);

