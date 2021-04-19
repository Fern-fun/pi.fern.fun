<?php 
    require('./fun.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../../css/main.css">
<link rel="stylesheet" href="../../css/main-phone.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="../../js/app.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<title>Data - App update</title>
</head>
<body>
    <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="#">App update</a></li>
        <li><a href="../currency">Currency</a></li>
        <li><a href="../stock">Stock</a></li>
    </ul>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    
    <!-- PANEL -->
    <div class="panel_main">

        <!-- iOS -->
        <div class="panel_info">
            <div class="info">
            <p>iOS</p>
            <p class="center" id="iOS_subscribe"><?php ios_update('https://ipsw.me/iPhone13,3'); ?></p>
            </div>
        </div>

        <!-- Factorio -->
        <div class="panel_info">
            <div class="info">
            <p>Factorio</p>
            <p class="center"><?php factorio_update(); ?></p>
            </div>
        </div>

        <!-- LoL -->
        <div class="panel_info">
            <div class="info">
            <p>League of Legends</p>
            <p class="center"><?php leagueoflegends(); ?></p>
            </div>
        </div>
        
        <!-- <div class="panel_info span-2">
            <canvas></canvas>
        </div> -->


        <!-- POPUP
        <div class="popup" id="popup">
            <div style="position: relative; height: 100%; width: 100%;">
            <a class="close" id="close"></a>
                <form action="" method="post"> 
                <h1>Subscribe</h1>
                <p>Let us inform you when the new iOS update comes live! <br/>
                Give us your email and we will send you updates as soon as they become available. </p>
                <input type="email" name="email" class="" placeholder="example@example.example" value=""  require>
                <input type="submit" name="subscribe" value="Subscribe" id="subscribe">
            </form>
            </div>
        </div> -->

        <script>
            // new Chart(document.getElementById("line-chart_bitcoin"), {
            // type: 'line',
            // data: {
            //     labels: [],
            //     datasets: [{ 
            //     data: [],
            //         label: "Bitcoin PLN",
            //         borderColor: "#FFD700",
            //         fill: true
            //     },
            //     ]},
            // options: {
            //     title: {
            //     display: true,
            //     text: ''
            //     }
            // }
            // });
        </script>
        
    </div>
    <footer>
        <center>&#169; By<a href="http://fern.fun/en-us/"> Fern.fun</a></center>
    </footer>
</body>
</html>

