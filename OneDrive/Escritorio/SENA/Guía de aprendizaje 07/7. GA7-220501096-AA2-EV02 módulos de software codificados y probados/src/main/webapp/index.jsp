<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Módulo de Software - Registro</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
        .container { background: white; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
        label { display: block; margin-top: 10px; font-weight: bold; }
        input, select { width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box; }
        button { margin-top: 15px; width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
<div class="container">
    <h2>Registro de Módulo</h2>
    <hr>
    <form action="ProcessServlet" method="POST">
        <label for="codigo">Código del Módulo:</label>
        <input type="text" id="codigo" name="codigo" required>

        <label for="nombre">Nombre del Componente:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="estado">Estado de la Prueba:</label>
        <select id="estado" name="estado">
            <option value="Exitoso">Exitoso</option>
            <option value="Fallido">Fallido</option>
            <option value="En Desarrollo">En Desarrollo</option>
        </select>
        <button type="submit">Enviar a Codificación</button>
    </form>
</div>
</body>
</html>