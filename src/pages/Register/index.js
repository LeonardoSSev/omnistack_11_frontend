import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name, email, whatsapp, city, uf
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch(error) {
      console.error(error);
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="WhatsApp"
            onChange={e => setWhatsapp(e.target.value)}
            required
          />
          
          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="UF" style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
};
