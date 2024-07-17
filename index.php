<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo con PHP</title>
</head>
<body>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        echo '<h1>Hola Mundo</h1>';
    }
    ?>

    <form method="post">
        <button type="submit">Mostrar Mensaje</button>
    </form>
</body>
</html>
