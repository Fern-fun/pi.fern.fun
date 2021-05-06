<?php require('./fun.php');$api = json_decode((file_get_contents("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")));$usd = (float)$api[0]->rates[1]->mid; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/main-phone.css">
    <title>Data - Currency</title>
</head>

<body>
<nav>
        <h1 style="display: none;" id="menu">Menu</h1>
        <input type="checkbox" id="hamburger" style="display: none;">
        <label for="hamburger" class="hamburger">
            <div class="line"></div>
        </label>
        <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="../update/">App update</a></li>
        <li><a href="#">Currency</a></li>
        <li><a href="./charts/">Currency charts</a></li>
        <li><a href="../stock">Stock</a></li>
        <li><a href="../../status/">Status</a></li>
    </ul>
</nav>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    <!-- PANEL -->
    <div class="panel_main">
        <!-- USD To PLN -->
        <div class="panel_info">
            <div class="info">
                <p>USD To PLN</p>
                <p class="center"><?php  usd_value($usd); ?> zł</p>
            </div>
        </div>
        <!-- BTC To PLN -->
        <div class="panel_info">
            <div class="info">
                <p>BTC To PLN</p>
                <p class="center"><?php  btc_value($usd); ?></p>
            </div>
        </div>
        <!-- ETH To PLN -->
        <div class="panel_info">
            <div class="info">
                <p>ETH To PLN</p>
                <p class="center"><?php  eth_value($usd); ?></p>
            </div>
        </div>
        <!-- USD To PLN -->
        <div class="panel_info">
            <div class="info">
                <p>EUR To PLN</p>
                <p class="center"><?php  eur_value(); ?> zł</p>
            </div>
        </div>
    </div>
    <footer>
        <center>&#169; By<a href="http://fern.fun/"> Fern.fun</a></center>
    </footer>
</body>

</html>