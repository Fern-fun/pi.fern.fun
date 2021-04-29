<?php
// Median
function getMedian($numbers) {
    sort($numbers);
    $count = sizeof($numbers);   // cache the count
    $index = floor($count/2);  // cache the index
    if (!$count) {
        
    } elseif ($count & 1) {    // count is odd
        return $numbers[$index];
    } else {                   // count is even
        return round(($numbers[$index-1] + $numbers[$index]) / 2,0);
    }
}

//USD value
function usd_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo number_format($api[0]->rates[1]->mid, 2);
}

//EUR value
function eur_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo number_format($api[0]->rates[7]->mid, 2);
}

//BTC value
function btc_value($cur){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $api1 = json_decode(file_get_contents("https://blockchain.info/ticker"));
    $bitcoin = $api1->USD->last;
    $a = $api1->USD->last * $api[0]->rates[1]->mid;
    if($cur == 'usd'){
        echo "$".round($bitcoin,1);
    }else if($cur == 'pln'){
        echo number_format($a,2)." zł";
    }
}

//ETH value
function eth_value($cur){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $api1 = json_decode(file_get_contents("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"));
    $eth = $api1[0]->current_price;
    $a = $eth * $api[0]->rates[1]->mid;

    if($cur == 'usd'){
        echo "$".round($eth,1);
    }else if($cur == 'pln'){
        echo number_format($a,2)." zł";
    }
}

// Gold value
function gold_value(){
    $api = file_get_contents('https://www.jmbullion.com/charts/gold-price/');
    $api_usd = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $a = explode('<div class="price-container">',$api);
    $b = explode('<span class="price">',$a[0]);
    $c = explode('</span>',$b[1]);
    $d = explode('$',$c[0]);
    $e = explode(',',$d[1]);

    $value = (float) $e[0].$e[1];
    echo number_format($value * $api_usd[0]->rates[1]->mid,2);
}

//Generated chart labels bitcoin
function generated_chart_labels_data_bitcoin(){
    $url = '../../[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
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
    $url = '../../[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
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

//Generated chart labels eth
function generated_chart_labels_data_eth(){
    $url = '../../[data]/currency/ethereum/pln/'.date("d.m.Y").".txt";
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

//Generated chart data eth
function generated_chart_data_eth(){
    $url = '../../[data]/currency/ethereum/pln/'.date("d.m.Y").".txt";
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

//Generated chart labels bitcoin month
function generated_char_labels_btc_m(){
    for($i = 1; $i <= 31; $i++){
        try {
            $url = '../../[data]/currency/bitcoin/pln/'.$i.date(".m.Y").".txt";
            if(file_exists($url)){
                echo "'".$i.date(".m")."',";
            }
        }
        catch(Exception $e){

        }
    }
}

//Generated chart data bitcoin month
function generated_char_data_btc_m(){
    $median = [];
    for($i = 1; $i <= 31; $i++){
        try {
            $array = [];
            $url = '../../[data]/currency/bitcoin/pln/'.$i.date(".m.Y").".txt";
            $handle = fopen($url, "r");
            if ($handle) {
                while (($line = fgets($handle)) !== false) {
                    
                    $a = explode('/',$line);
                    $b = explode('zł',$a[0]);
                    array_push($array,$b[0]); 
                }
                echo "'".getMedian($array)."',";
                fclose($handle);
            } else {
                
            } 

        }
        catch(Exception $e){

        }
    }
}

//Generated chart labels eth month
function generated_char_labels_eth_m(){
    for($i = 1; $i <= 31; $i++){
        try {
            $url = '../../[data]/currency/ethereum/pln/'.$i.date(".m.Y").".txt";
            if(file_exists($url)){
                $a =  "'".$i.date(".m")."',";
                echo $a;
            }
        }
        catch(Exception $e){

        }
    } 
    
}

//Generated chart data eth month
function generated_char_data_eth_m(){
    $median = [];
    for($i = 1; $i <= 31; $i++){
        try {
            $array = [];
            $url = '../../[data]/currency/ethereum/pln/'.$i.date(".m.Y").".txt";
            $handle = fopen($url, "r");
            if ($handle) {
                while (($line = fgets($handle)) !== false) {
                    
                    $a = explode('/',$line);
                    $b = explode('zł',$a[0]);
                    array_push($array,$b[0]); 
                }
                echo "'".getMedian($array)."',";
                fclose($handle);
            } else {
                
            } 

        }
        catch(Exception $e){

        }
    }
}

function silver_ounce(){
    $silver = shell_exec('python3 /var/www/py/data/preciousmetals.py silver');
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    $silver = explode('$',$silver);
    echo number_format((float)$silver[1] * $api[0]->rates[1]->mid,2);
}

function platinum_ounce(){
    $platinum = shell_exec('python3 /var/www/py/data/preciousmetals.py platinum');
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo number_format((float)$platinum * $api[0]->rates[1]->mid,2);
}

function palladium_ounce(){
    $palladium = shell_exec('python3 /var/www/py/data/preciousmetals.py palladium');
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo number_format((float)$palladium * $api[0]->rates[1]->mid,2);
    // echo $palladium * $api[0]->rates[1]->mid;
}

?>