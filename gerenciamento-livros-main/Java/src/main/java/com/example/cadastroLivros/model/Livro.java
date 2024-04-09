package com.example.cadastroLivros.model;
import jakarta.persistence.*;

@Entity
public class Livro {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String editora;
    private String genero;
    private int ano;


 public Long getId(){
     return id;
 }
   public void setId(Long id){
     this.id = id;
 }
   public String getTitulo(){
     return titulo;
 }
    public void setTitulo(String titulo){
     this.titulo = titulo;
 }
   
    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }
 
}

