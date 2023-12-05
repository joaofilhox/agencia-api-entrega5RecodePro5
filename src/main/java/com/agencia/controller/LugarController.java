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

import com.agencia.model.Lugar;
import com.agencia.repository.LugarRepository;

@RestController
@RequestMapping("/lugares")
public class LugarController {

    @Autowired
    private LugarRepository lugarRepository;

    @GetMapping
    public List<Lugar> listar() {
        return lugarRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Lugar adicionar(@RequestBody Lugar lugar) {
        return lugarRepository.save(lugar);
    }

    // Você pode adicionar métodos para atualizar, deletar e outros, similar ao controlador de clientes

    // Exemplo de método para atualizar
    @PutMapping("/{id}")
    public Lugar atualizar(@PathVariable String id, @RequestBody Lugar lugarAtualizado) {
        lugarAtualizado.setId(id);
        return lugarRepository.save(lugarAtualizado);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable String id) {
        lugarRepository.deleteById(id);
    }

}
