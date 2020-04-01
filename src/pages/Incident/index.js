import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Incident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const ongId = localStorage.getItem('ongId');

    const data = {
      title, description, value
    };

    await api.post('/incidents', data, {
      headers: {
        Authorization: ongId
      }
    });

    history.push('/profile');
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título do caso"
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Valor em reais"
            onChange={e => setValue(e.target.value)}
            required
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}