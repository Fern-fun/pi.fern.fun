<?php 
session_start();

//USD value
function usd_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo round($api[0]->rates[1]->mid, 2);
}


//Generated chart data tesla
function generated_chart_data_tesla(){
    $url = '../../[data]/stocks/TSLA/'.date("d.m.Y").".txt";
    $handle = fopen($url, "r");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            
            $a = explode('/',$line);
            $b = explode('zł',$a[0]);
            echo "'".$b[0]."',";
        }

        fclose($handle);
    } else {
        
    } 
}

//Generated chart labels tesla
function generated_chart_labels_data_tesla(){

    $url = '../../[data]/stocks/TSLA/'.date("d.m.Y").".txt";
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

?>