<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="model.Elemento" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Módulo Procesado</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #e9ecef; }
        .card { background: white; padding: 20px; border-radius: 8px; max-width: 400px; border-left: 5px solid #28a745; }
        a { display: inline-block; margin-top: 15px; color: #007bff; text-decoration: none; }
    </style>
</head>
<body>
<div class="card">
    <h2>¡Módulo Codificado y Probado!</h2>
    <hr>
    <%
        Elemento el = (Elemento) request.getAttribute("nuevoElemento");
        if (el != null) {
    %>
        <p><strong>Código:</strong> <%= el.getCodigo() %></p>
        <p><strong>Componente:</strong> <%= el.getNombre() %></p>
        <p><strong>Resultado de Prueba:</strong> <%= el.getEstado() %></p>
    <% 
        } else { 
    %>
        <p style="color: red;">No se recibieron datos válidos.</p>
    <% 
        } 
    %>
    <a href="index.jsp">← Volver al formulario</a>
</div>
</body>
</html>