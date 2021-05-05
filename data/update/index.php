<?php require('./fun.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/main-phone.css">
    <script src="./js/Chart.min.js"></script>
    <title>Data - App update</title>
</head>

<body>
    <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="#">App update</a></li>
        <li><a href="../currency">Currency</a></li>
        <li><a href="../stock">Stock</a></li>
        <li><a href="../../status/">Status</a></li>
    </ul>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    <!-- PANEL -->
    <div class="panel_main">
        <!-- iOS -->
        <div class="panel_info">
            <div class="info">
                <p>iOS</p>
                <p class="center" id="iOS_subscribe"><?php  ios_update('https://ipsw.me/iPhone13,3'); ?></p>
            </div>
        </div>
        <!-- Factorio -->
        <div class="panel_info">
            <div class="info">
                <p>Factorio</p>
                <p class="center"><?php  factorio_update(); ?></p>
            </div>
        </div>
        <!-- LoL -->
        <div class="panel_info">
            <div class="info">
                <p>League of Legends</p>
                <p class="center"><?php  leagueoflegends(); ?></p>
            </div>
        </div>
        <!-- macOS -->
        <div class="panel_info">
            <div class="info">
                <p>macOS</p>
                <p class="center"><?php  macos_update('https://ipsw.me/MacBookPro17,1'); ?></p>
            </div>
        </div>
    </div>
    <footer>
        <center>&#169; By<a href="http://fern.fun/en-us/"> Fern.fun</a></center>
    </footer>
</body>

</html>