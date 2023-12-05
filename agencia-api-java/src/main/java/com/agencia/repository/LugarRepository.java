package com.agencia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agencia.model.Lugar;

@Repository
public interface LugarRepository extends MongoRepository<Lugar, String> {

}
