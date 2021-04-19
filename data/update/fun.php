<?php 
session_start();

//IOS update 
function ios_update($api){
    $api = file_get_contents($api);
    $a = explode('<tr',$api);
    $b = explode('</tr>',$a[1]);
    $c = explode('iOS',$b[0]);
    $d = explode('GB',$c[1]);
    $e = str_replace('', '', $d[0]);
    $f = explode(' ',$e);
    $g = null;
    if($api != 1){
        echo "iOS";
        for($i = 0; $i < count($f); $i++){
            if($f[$i] != "" || $f[$i] != " "){
                echo trim($f[$i])." ";
            }
        }
    
        echo "GB";
    }else{
        $g .= "iOS";
        for($i = 0; $i < count($f); $i++){
            if($f[$i] != "" || $f[$i] != " "){
                $g .= trim($f[$i])." ";
            }
        }
    
        $g .= "GB";
        
        echo json_encode($g);
    }
}

//Factorio update
function factorio_update(){
    $api = file_get_contents('https://factorio.com/');
    $a = explode('<dd class="text-right">',$api);
    $b = explode('</dd>',$a[1]);
    echo $b[0]." stable";
}

//league of legends update
function leagueoflegends(){
    $api = json_decode(file_get_contents('https://ddragon.leagueoflegends.com/api/versions.json'));
    echo $api[0];
}


?>