<?php 
session_start();

    //Show all error
    // ini_set('display_errors', 1); 
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
    
//Weather status
function weather_status(){
    try{
        $api_loc = json_decode(file_get_contents("https://freegeoip.app/json/".$_SERVER['REMOTE_ADDR']));
        $country_name = $api_loc->country_code;
        $city = $api_loc->city;
    
        if(!isset($_COOKIE['weather'])){
            $url_weather = "http://api.openweathermap.org/data/2.5/weather?&appid=72f9ca1b81c35c927314fdb178cf7fbc&units=metric&q=".$city.",".$country_name;
            $api_weather = json_decode(file_get_contents($url_weather));
    
            $value = $api_weather->main->temp." ".$api_weather->weather[0]->main." ".$api_weather->wind->speed;
            setcookie("weather", $value, time()+1800);
    
            $temp = $api_weather->main->temp;
            $weather = $api_weather->weather[0]->main;
            $wind_speed = $api_weather->wind->speed;
    
            weather_show($temp,$weather,$wind_speed,$city);
        }else{
            $split_weather = explode(" ",$_COOKIE['weather']);
            $temp = $split_weather[0];
            $weather = $split_weather[1];
            $wind_speed = $split_weather[2];
    
            weather_show($temp,$weather,$wind_speed,$city);
        }
    } catch (Exception $error){
        
    }
}

//Weather show 
function weather_show($temp,$weather,$wind_speed,$city){
    try{
        echo '<p>'.$city.'</p><p class="center">'.round((float) $temp,0).'º</p>';
    }catch (Exception $e){
        echo "Any API problem";
    }
}

//Generated chart labels
function generated_chart_labels_data(){

    $url = './[data]/temp/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            $b = preg_replace('/\s+/', '', $a[1]);
            echo "'".$b."',";
        }

        fclose($handle);
    } else {
        
    } 
}

//Generated chart data
function generated_chart_data_temp(){
    $url = './[data]/temp/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            echo "".round($a[0],1).",";
        }

        fclose($handle);
    } else {
        
    } 
}

//Generated chart labels
function generated_chart_labels_data_ram(){

    $url = './[data]/ram/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            $b = preg_replace('/\s+/', '', $a[1]);
            echo "'".$b."',";
        }

        fclose($handle);
    } else {
        
    } 
}

//Generated chart data
function generated_chart_data_ram(){
    $url = './[data]/ram/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            echo "".round($a[0],1).",";
        }

        fclose($handle);
    } else {
        
    } 
}

//BTC value
function btc_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $api1 = json_decode(file_get_contents("https://blockchain.info/ticker"));
    $bitcost = $api1->USD->last;
    $a = $api1->USD->last * $api[0]->rates[1]->mid;
    echo round($a,1)."zł";
}

//ETH value
function eth_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $api1 = json_decode(file_get_contents("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"));
    $eth = $api1[0]->current_price;
    $a = $eth * $api[0]->rates[1]->mid;
    echo round($a,1)."zł";

}

//USD value
function usd_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo round($api[0]->rates[1]->mid, 2);
}



//subscribe
function subscribe(){
    if(isset($_POST['subscribe'])){
        if($_POST['email'] != ""){
            $email = $_POST['email'];
            shell_exec("python3.9 /var/www/py/iOS/email_save.py '$email'");
        }
    }
}

//Generated chart labels bitcoin
function generated_chart_labels_data_bitcoin(){
    $url = './[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            $b = preg_replace('/\s+/', '', $a[1]);
            echo "'".$b."',";
        }

        fclose($handle);
    } else {
        
    } 
}

//Generated chart data bitcoin
function generated_chart_data_bitcoin(){
    $url = './[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            $a = explode('/',$line);
            echo "".round($a[0],1).",";
        }

        fclose($handle);
    } else {
        
    } 
}
?>