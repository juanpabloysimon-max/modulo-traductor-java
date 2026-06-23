package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Elemento;
import java.io.IOException;

@WebServlet("/ProcessServlet")
public class ProcessServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Manejo del método GET (Redirecciona si entran directo a la URL)
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.sendRedirect("index.jsp");
    }

    // Manejo del método POST (Procesa los datos enviados desde el formulario HTML)
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // 1. Capturar los parámetros enviados desde el formulario index.jsp
        String codigo = request.getParameter("codigo");
        String nombre = request.getParameter("nombre");
        String estado = request.getParameter("estado");

        // 2. Crear una instancia del Modelo y meterle los datos
        Elemento elemento = new Elemento();
        elemento.setCodigo(codigo);
        elemento.setNombre(nombre);
        elemento.setEstado(estado);

        // 3. Guardar el objeto en la petición para que la vista lo pueda usar
        request.setAttribute("nuevoElemento", elemento);

        // 4. Enviar el flujo y los datos a la página JSP de resultados
        request.getRequestDispatcher("resultado.jsp").forward(request, response);
    }
}