import React from 'react';
import './style.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Entre em Contato</h1>
      <div className="info">
        <p>Estamos ansiosos para ouvir você! Entre em contato conosco para mais informações sobre nossos serviços.</p>
        <p>Email: voaevibra@example.com</p>
        <p>Telefone: (00) 1234-5678</p>
      </div>
      <div className="form">
        <h2>Envie uma Mensagem</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
