package com.example.cadastroLivros.controller;
import com.example.cadastroLivros.model.Livro;
import com.example.cadastroLivros.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@RestController
@RequestMapping("/livros")
public class LivroController {
    @Autowired
    private LivroRepository livroRepository;
    @GetMapping
    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }
    @PostMapping
    public Livro criarLivro(@RequestBody Livro livro) {
        return livroRepository.save(livro);
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarLivro(@PathVariable Long id) {
        if (livroRepository.existsById(id)) {
            livroRepository.deleteById(id);
            return ResponseEntity.ok("Livro deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable(name = "id") Long id, @RequestBody Livro livroAtualizado) {
        if (livroRepository.existsById(id)) {
            Livro livro = livroRepository.findById(id).get();
            livro.setTitulo(livroAtualizado.getTitulo());
            livro.setEditora(livroAtualizado.getEditora());
            livro.setGenero(livroAtualizado.getGenero());
            livro.setAno(livroAtualizado.getAno());

            Livro livroAtualizadoBD = livroRepository.save(livro);
            return ResponseEntity.ok(livroAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
