<?php 

function status($a){
    $output = shell_exec('python3 /var/www/py/status.py '.$a); 
    if($output != 0){
        echo '<p class="center" id="'.$a.'" style="color:green;">Active</p>';
    }else{
        echo '<p class="center" id="'.$a.'" style="color:red;">Inactive</p>';
    }
}

function status_fern_fun(){
    $api = file_get_contents('http://fern.fun');
    $a = explode('<title>',$api);
    $b = explode('</title>',$a[1]);
    if($b[0] === 'Fern.fun'){
        echo '<p class="center" style="color:green;"> Active</p>';
    }else{
        echo '<p class="center" style="color:red;"> Inactive</p>';
    }
}
?>