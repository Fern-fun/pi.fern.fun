<?php require('./fun.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/main-phone.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Data - Stock</title>
</head>

<body>
    <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="../update/">App update</a></li>
        <li><a href="../currency/">Currency</a></li>
        <li><a href="#">Stock</a></li>
        <li><a href="../../status/">Status</a></li>
    </ul>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    <!-- PANEL -->
    <div class="panel_main">
        <div class="panel_info span-2"><canvas id="line-chart_tesla" width="550px" height="550px"></canvas></div>
        <script>
        new Chart(document.getElementById("line-chart_tesla"), {
            type: 'line',
            data: {
                labels: [<?php  generated_chart_labels_data_tesla(); ?>],
                datasets: [{
                    data: [<?php  generated_chart_data_tesla(); ?>],
                    label: "Tesla Inc [$]",
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