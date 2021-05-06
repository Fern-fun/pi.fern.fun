<?php require('../fun.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../css/main.css">
    <link rel="stylesheet" href="../../../css/main-phone.css">
    <script src="/js/Chart.min.js"></script>
    <title>Data - Currency Charts</title>
</head>

<body>
<nav>
        <h1 style="display: none;" id="menu">Menu</h1>
        <input type="checkbox" id="hamburger" style="display: none;">
        <label for="hamburger" class="hamburger">
            <div class="line"></div>
        </label>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="../../update/">App update</a></li>
        <li><a href="../">Currency</a></li>
        <li><a href="../../stock">Stock</a></li>
        <li><a href="../../../status/">Status</a></li>
    </ul>
</nav>
    
    <center><img src="../../../img/raspi.webp" width="200px" height="180px"></center>
    <!-- PANEL -->
    <div class="panel_main">
        <!-- BTC Chart -->
        <div class="panel_info span-2"><canvas id="line-chart_bitcoin" width="550px" height="550px"></canvas></div>
        <!-- ETH Chart -->
        <div class="panel_info span-2"><canvas id="line-chart_eth" width="550px" height="550px"></canvas></div>
        <!-- BTC Chart M -->
        <div class="panel_info span-2"><canvas id="line-chart_bitcoin_m" width="550px" height="550px"></canvas></div>
        <!-- ETH Chart M-->
        <div class="panel_info span-2"><canvas id="line-chart_eth_m" width="550px" height="550px"></canvas></div>
        <script>
            new Chart(document.getElementById("line-chart_bitcoin"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_chart_labels_data_bitcoin(); ?>],
                    datasets: [{
                        data: [<?php  generated_chart_data_bitcoin(); ?>],
                        label: "<?php  echo date("d.m.Y"); ?> BTC TO PLN",
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
            new Chart(document.getElementById("line-chart_eth"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_chart_labels_data_eth(); ?>],
                    datasets: [{
                        data: [<?php  generated_chart_data_eth(); ?>],
                        label: "<?php  echo date("d.m.Y"); ?> ETH TO PLN",
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
            new Chart(document.getElementById("line-chart_bitcoin_m"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_char_labels_btc_m(); ?>],
                    datasets: [{
                        data: [<?php  generated_char_data_btc_m(); ?>],
                        label: "<?php  echo date("m.Y"); ?> BTC TO PLN",
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
            new Chart(document.getElementById("line-chart_eth_m"), {
                type: 'line',
                data: {
                    labels: [<?php  generated_char_labels_eth_m(); ?>],
                    datasets: [{
                        data: [<?php  generated_char_data_eth_m(); ?>],
                        label: "<?php  echo date("m.Y"); ?> ETH TO PLN",
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
        <center>&#169; By<a href="http://fern.fun/"> Fern.fun</a></center>
    </footer>
</body>

</html>