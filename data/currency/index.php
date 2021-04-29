<?php 
    require('./fun.php');
    if($_GET['cur'] != null)
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
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<title>Data - Currency</title>
</head>
<body>
    <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="../update/">App update</a></li>
        <li><a href="#">Currency</a></li>
        <li><a href="../stock">Stock</a></li>
    </ul>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    
    <!-- PANEL -->
    <div class="panel_main">

        <!-- USD To PLN -->
        <div class="panel_info">
            <div class="info">
            <p>USD To PLN</p>
            <p class="center"><?php usd_value(); ?> zł</p>
            </div>
        </div>

        <!-- BTC To PLN -->
        <div class="panel_info">
            <div class="info">
                <p>BTC To PLN</p>
                <p class="center"><?php btc_value("pln"); ?></p>
            </div>
        </div>

        <!-- ETH To PLN -->
        <div class="panel_info">
            <div class="info">
            <p>ETH To PLN</p>
                <p class="center"><?php eth_value("pln"); ?></p>
            </div>
        </div>

        <!-- USD To PLN -->
        <div class="panel_info">
            <div class="info">
            <p>EUR To PLN</p>
            <p class="center"><?php eur_value(); ?> zł</p>
            </div>
        </div>

        <!-- BTC Chart -->
        <div class="panel_info span-2">
            <canvas id="line-chart_bitcoin" width="550px" height="550px"></canvas>
        </div>
        <!-- ETH Chart -->
        <div class="panel_info span-2">
            <canvas id="line-chart_eth" width="550px" height="550px"></canvas>
        </div>

        <!-- Gold per ounce -->
        <div class="panel_info">
            <div class="info">
            <p>Gold per ounce</p>
            <p class="center"><?php gold_value(); ?> zł</p>
            </div>
        </div>

        <!-- Silver per ounce -->
        <div class="panel_info">
            <div class="info">
            <p>Silver per ounce</p>
            <p class="center"><?php silver_ounce(); ?> zł</p>
            </div>
        </div>
        <!-- Platinum per ounce -->
        <div class="panel_info">
            <div class="info">
            <p>Platinum per ounce</p>
            <p class="center"><?php platinum_ounce(); ?> zł</p>
            </div>
        </div>
        <!-- Palladium per ounce -->
        <div class="panel_info">
            <div class="info">
            <p>Palladium per ounce</p>
            <p class="center"><?php palladium_ounce(); ?> zł</p>
            </div>
        </div>
        <!-- Template -->
        <div class="panel_info">
            <div class="info">
            <p></p>
            <p class="center"></p>
            </div>
        </div>
        <!-- Template -->
        <div class="panel_info">
            <div class="info">
            <p></p>
            <p class="center"></p>
            </div>
        </div>
        <!-- BTC Chart -->
        <div class="panel_info span-2">
            <canvas id="line-chart_bitcoin_m" width="550px" height="550px"></canvas>
        </div>
        <!-- ETH Chart -->
        <div class="panel_info span-2">
            <canvas id="line-chart_eth_m" width="550px" height="550px"></canvas>
        </div>

        <script>
            new Chart(document.getElementById("line-chart_bitcoin"), {
            type: 'line',
            data: {
                labels: [<?php generated_chart_labels_data_bitcoin(); ?>],
                datasets: [{ 
                data: [<?php generated_chart_data_bitcoin(); ?>],
                    label: "<?php echo date("d.m.Y"); ?> BTC TO PLN",
                    borderColor: "#" + Math.floor(Math.random()*16777215).toString(16),
                    fill: true
                },
                ]},
            options: {
                title: {
                display: true,
                text: ''
                }
            }
            });
            new Chart(document.getElementById("line-chart_eth"), {
            type: 'line',
            data: {
                labels: [<?php generated_chart_labels_data_eth(); ?>],
                datasets: [{ 
                data: [<?php generated_chart_data_eth(); ?>],
                    label: "<?php echo date("d.m.Y"); ?> ETH TO PLN",
                    borderColor: "#" + Math.floor(Math.random()*16777215).toString(16),
                    fill: true
                },
                ]},
            options: {
                title: {
                display: true,
                text: ''
                }
            }
            });
            new Chart(document.getElementById("line-chart_bitcoin_m"), {
            type: 'line',
            data: {
                labels: [ <?php generated_char_labels_btc_m(); ?>],
                datasets: [{ 
                data: [<?php generated_char_data_btc_m(); ?>],
                    label: "<?php echo date("m.Y"); ?> BTC TO PLN",
                    borderColor: "#" + Math.floor(Math.random()*16777215).toString(16),
                    fill: true
                },
                ]},
            options: {
                title: {
                display: true,
                text: ''
                }
            }
            });
            new Chart(document.getElementById("line-chart_eth_m"), {
            type: 'line',
            data: {
                labels: [ <?php generated_char_labels_eth_m(); ?>],
                datasets: [{ 
                data: [<?php generated_char_data_eth_m(); ?>],
                    label: "<?php echo date("m.Y"); ?> ETH TO PLN",
                    borderColor: "#" + Math.floor(Math.random()*16777215).toString(16),
                    fill: true
                },
                ]},
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
        <center>&#169; By<a href="http://fern.fun/"> Fern.fun</a></center>
    </footer>
</body>
</html>