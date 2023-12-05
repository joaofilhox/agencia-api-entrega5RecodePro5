package com.agencia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.agencia.model.Cliente;


public interface ClienteRepository extends MongoRepository<Cliente, String> {

}
