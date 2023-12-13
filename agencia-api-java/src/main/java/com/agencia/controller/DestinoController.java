package com.agencia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.model.Destino;
import com.agencia.repository.DestinoRepository;

@RestController
@RequestMapping("/destinos")
public class DestinoController {

    @Autowired
    private DestinoRepository destinoRepository;

    @GetMapping
    public List<Destino> listar() {
        return destinoRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Destino adicionar(@RequestBody Destino destino) {
        return destinoRepository.save(destino);
    }

    @PutMapping("/{id}")
    public Destino atualizar(@PathVariable String id, @RequestBody Destino destinoAtualizado) {
        destinoAtualizado.setId(id);
        return destinoRepository.save(destinoAtualizado);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable String id) {
        destinoRepository.deleteById(id);
    }

}
