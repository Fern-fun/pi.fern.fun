<?php 
session_start();

//USD value
function usd_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo round($api[0]->rates[1]->mid, 2);
}

//EUR value
function eur_value(){
    $api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));
    echo round($api[0]->rates[7]->mid, 2);
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
        echo round($a,1)." zł";
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
        echo round($a,1)." zł";
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
    echo round($value * $api_usd[0]->rates[1]->mid,1);
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
?>