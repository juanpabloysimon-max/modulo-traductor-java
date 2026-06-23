package model;

public class Elemento {
    private String codigo;
    private String nombre;
    private String estado;

    // Constructor vacío obligatorio
    public Elemento() {}

    // Métodos Getters y Setters
    public String getCodigo() { return codigo; }
    public void setCodigo(String codigo) { this.codigo = codigo; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}