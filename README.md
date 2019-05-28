<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RGB Guessing Game</title>

    <link rel="stylesheet" type="text/css" href="color-guessing-game.css">
</head>
<body>
    <h1>
        <span id="color-display">RGB</span>
        <br>
        Guessing Game</h1>

    <div id="options">
        <button id="reset">New Colors</button>
        <span id="message"></span>
        <button id="easy" class="mode">Easy</button>
        <button id="hard" class="mode selected">Hard</button>
    </div>

    <div id="container">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
    </div>
    

    <script type="text/javascript" src="color-guessing-game.js"></script>
</body>
</html>
