package com.agencia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agencia.model.Destino;

@Repository
public interface DestinoRepository extends MongoRepository<Destino, String> {

}
