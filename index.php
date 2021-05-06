<?php require("./php/functions.php");
$output = shell_exec('python3 /var/www/py/temp.py');
$temp = (int)$output;$output1 = shell_exec('python3 /var/www/py/ram.py');
$ram = $output1;
$output2 = shell_exec('python3 /var/www/py/drive.py');
$drive = explode("/",$output2); 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/main-phone.css">
    <script src="./js/Chart.min.js"></script>
    <title>Serwer - Panel</title>
</head>

<body>
    <nav>
        <h1 style="display: none;" id="menu">Menu</h1>
        <input type="checkbox" id="hamburger" style="display: none;">
        <label for="hamburger" class="hamburger">
            <div class="line"></div>
        </label>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="./data/update/">App update</a></li>
        <li><a href="./data/currency">Currency</a></li>
        <li><a href="./data/stock">Stock</a></li>
        <li><a href="./status/">Status</a></li>
    </ul>
</nav>
    <center><img src="./img/raspi.webp" width="200px" height="180px"></center><!-- PANEL -->
    <div class="panel_main">
        <!-- Weather Panel -->
        <div class="panel_info">
            <div class="info"><?php  weather_status(); ?></div>
        </div>
        <!-- Temperature CPU -->
        <div class="panel_info">
            <div class="info">
                <p>CPU temperature</p>
                <p class="center"><?php  echo $temp."º"; ?></p>
            </div>
        </div>
        <!-- Memory usage -->
        <div class="panel_info">
            <div class="info">
                <p>Memory usage</p>
                <p class="center"> <?php  echo $ram."%"; ?></p>
            </div>
        </div>
        <!-- Disc status -->
        <div class="panel_info">
            <div class="info">
                <p>Disc</p>
                <p class="center"><?php  echo (int)$drive[0]."GB/".(int)$drive[1]."GB"; ?></p>
            </div>
        </div>
        <!-- Temperature chart -->
        <div class="panel_chart span-2"><canvas id="line-chart_temp" width="550px" height="550px"></canvas></div>
        <!-- RAM usage chart -->
        <div class="panel_chart span-2"><canvas id="line-chart_ram" width="550px" height="550px"></canvas></div>
        <!-- <div class="panel_info span-2"><canvas id="line-chart_bitcoin" width="550px" height="550px"></canvas></div><div class="panel_info"><div class="info"></div></div> -->
        <!-- <div class="panel_info span-2"><canvas></canvas></div> -->
        <!-- POPUP<div class="popup" id="popup"><div style="position: relative; height: 100%; width: 100%;"><a class="close" id="close"></a><form action="" method="post"><h1>Subscribe</h1><p>Let us inform you when the new iOS update comes live! <br/>Give us your email and we will send you updates as soon as they become available. </p><input type="email" name="email" class="" placeholder="example@example.example" value="" require><input type="submit" name="subscribe" value="Subscribe" id="subscribe"></form></div></div> -->
        <script>
            new Chart(document.getElementById("line-chart_temp"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_chart_labels_data(); ?>],
                    datasets: [{
                        data: [<?php  generated_chart_data_temp(); ?>],
                        label: "CPU temperature [º]",
                        borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
                        fill: true
                    }, ]
                },
                options: {
                    title: {
                        display: true,
                        text: ''
                    }
                }
            });
            new Chart(document.getElementById("line-chart_ram"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_chart_labels_data_ram(); ?>],
                    datasets: [{
                        data: [<?php  generated_chart_data_ram(); ?>],
                        label: "Ram usage [%]",
                        borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
                        fill: true
                    }, ]
                },
                options: {
                    title: {
                        display: true,
                        text: ''
                    }
                }
            });
        </script>
    </div>
    <footer>
        <center>&#169; By<a href="http://fern.fun/en-us/"> Fern.fun</a></center>
    </footer>
</body>

</html>