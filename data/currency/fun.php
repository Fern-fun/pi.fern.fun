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
function usd_value($usd){
    echo number_format($usd, 2);
}

//EUR value
function eur_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo number_format($api[0]->rates[7]->mid, 2);
}

//BTC value
function btc_value($usd){
    $api1 = json_decode(file_get_contents("https://blockchain.info/ticker"));
    echo number_format($api1->USD->last * $usd,2)." zł";
}

//ETH value
function eth_value($usd){
    $api1 = json_decode(file_get_contents("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"));
    echo number_format($api1[0]->current_price * $usd,2)." zł";
}

// Gold value
function gold_value($usd){
    // $gold = shell_exec('python3 /var/www/py/data/preciousmetals.py gold');
    // echo number_format((float)$gold * $usd,2);
}

// Silver value
function silver_ounce($usd){
    // $silver = shell_exec('python3 /var/www/py/data/preciousmetals.py silver');
    // echo number_format((float)$silver * $usd,2);
}

// Platinum value
function platinum_ounce($usd){
    // $platinum = shell_exec('python3 /var/www/py/data/preciousmetals.py platinum');
    // echo number_format((float)$platinum * $usd,2);
}

// Palladium value
function palladium_ounce($usd){
    // $palladium = shell_exec('python3 /var/www/py/data/preciousmetals.py palladium');
    // echo number_format((float)$palladium * $usd,2);
}

//Generated chart labels bitcoin
function generated_chart_labels_data_bitcoin(){
    $url = '../../../[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
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
    $url = '../../../[data]/currency/bitcoin/pln/'.date("d.m.Y").".txt";
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
    $url = '../../../[data]/currency/ethereum/pln/'.date("d.m.Y").".txt";
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
    $url = '../../../[data]/currency/ethereum/pln/'.date("d.m.Y").".txt";
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
            $url = '../../../[data]/currency/bitcoin/pln/'.$i.date(".m.Y").".txt";
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
    for($i = 1; $i <= 31; $i++){
        try {
            $array = [];
            $url = '../../../[data]/currency/bitcoin/pln/'.$i.date(".m.Y").".txt";
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
            $url = '../../../[data]/currency/ethereum/pln/'.$i.date(".m.Y").".txt";
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
    for($i = 1; $i <= 31; $i++){
        try {
            $array = [];
            $url = '../../../[data]/currency/ethereum/pln/'.$i.date(".m.Y").".txt";
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
?>