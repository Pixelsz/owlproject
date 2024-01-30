import React, { useState } from 'react';
import './Form.css'

const AirlineBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    documentType: '',
    documentNumber: '',
    cpf: '',
    birthDate: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <div>
      <h1>Compra de Passagem Aérea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Sobrenome:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          País de Residência:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Tipo de Documento:
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="passport">Passaporte</option>
            <option value="idCard">Carteira de Identidade</option>
          </select>
        </label>
        <br />
        <label>
          Número do Documento:
          <input
            type="text"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Sexo:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </label>
        <br />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default AirlineBookingForm;