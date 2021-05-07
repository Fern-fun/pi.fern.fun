<?php require('./fun.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/main-phone.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <title>Panel - Status</title>
</head>

<body>
    <ul>
        <li><a href="../..">Home</a></li>
        <li><a href="../data/update">App update</a></li>
        <li><a href="../data/currency">Currency</a></li>
        <li><a href="../data/stock">Stock</a></li>
        <li><a href="#">Status</a></li>
    </ul>
    <center><img src="../../img/raspi.webp" width="200px" height="180px"></center>
    <!-- PANEL -->
    <div class="panel_main">
        <!-- Fern.fun -->
        <div class="panel_info">
            <div class="info">
                <p>Fern.fun</p><?php  status_fern_fun(); ?>
            </div>
        </div><!-- Data collection services -->
        <div class="panel_info">
            <div class="info">
                <p id="dcs" class="click">DCS</p><?php  status('data'); ?>
            </div>
        </div><!-- Stock data services -->
        <div class="panel_info">
            <div class="info">
                <p id="sds" class="click">SDS</p><?php  status('stock'); ?>
            </div>
        </div><!-- Discord Bot -->
        <div class="panel_info">
            <div class="info">
                <p>Discord Bot</p><?php  status('ds'); ?>
            </div>
        </div>
    </div>
    <footer>
        <center>&#169; By<a href="http://fern.fun/en-us/"> Fern.fun</a></center>
    </footer>
    <script>
    var x = 0;
    $('#dcs').click(function() {
        if (x == 0) {
            $(this).text('Data collection services');
            x = 1;
        } else {
            $(this).text('DSC');
            x = 0;
        }
    });
    $('#sds').click(function() {
        if (x == 0) {
            $(this).text('Stock data services');
            x = 1;
        } else {
            $(this).text('SDS');
            x = 0;
        }
    });
    </script>
</body>

</html>