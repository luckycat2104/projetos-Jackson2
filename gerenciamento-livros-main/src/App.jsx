import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [livros, setLivros] = useState([]);
const [novoLivro, setNovoLivro] = useState({
  titulo: '',
  editora: '',
  genero: '',
  ano: '',
});
useEffect(() => {
  fetchLivros();
}, []);
const fetchLivros = async () => {
  try {
    const response = await axios.get('http://localhost:8090/livros');
    setLivros(response.data);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
  }
};
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNovoLivro((prevLivro) => ({
    ...prevLivro,
    [name]: value,
  }));
};
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8090/livros', novoLivro);
    fetchLivros();
    setNovoLivro({
      titulo: '',
      editora: '',
      genero: '',
      ano: '',
    });
  } catch (error) {
    console.error('Erro ao criar veículo:', error);
  }
};
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8090/livros/${id}`);
    fetchLivros();
  } catch (error) {
    console.error('Erro ao excluir veículo:', error);
  }
};
const handleUpdate = async (id, livroAtualizado) => {
  try {
    await axios.put(`http://localhost:8090/livros/${id}`, livroAtualizado);
    fetchLivros();
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
  }
};
return (
  <div>
    {/* Cabeçalho */}
    <h1>Gerenciamento de Livros</h1>

    {/* Formulário de adição de veículo */}
    <form onSubmit={handleSubmit}>
      {/* Campo para a titulo */}
      <input
        type="text"
        name="titulo"
        placeholder="titulo"
        value={novoLivro.titulo}
        onChange={handleInputChange}
      />
      {/* Campo para a editora */}
      <input
        type="text"
        name="editora"
        placeholder="editora"
        value={novoLivro.editora}
        onChange={handleInputChange}
      />
      {/* Campo para o genero */}
      <input
        type="text"
        name="genero"
        placeholder="genero"
        value={novoLivro.genero}
        onChange={handleInputChange}
      />
      {/* Campo para o ano */}
      <input
        type="number"
        name="ano"
        placeholder="Ano"
        value={novoLivro.ano}
        onChange={handleInputChange}
      />
      {/* Botão de envio do formulário */}
      <button type="submit">Adicionar Livro</button>
    </form>

    {/* Lista de livros */}
    <ul>
      {/* Mapeamento dos livros */}
      {livros.map((livro) => (
        <li key={livro.id}>
          {/* Exibição dos detalhes do veículo */}
          {livro.titulo} - {livro.editora} {livro.genero} ({livro.ano})
          
          {/* Botão de exclusão */}
          <button onClick={() => handleDelete(livro.id)}>Excluir</button>
          
          {/* Botão de atualização */}
          <button
            onClick={() =>
              handleUpdate(livro.id, {
                ...livro,
                genero: 'Novo genero Atualizado', // Exemplo de atualização
              })
            }
          >
            Atualizar
          </button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default App;

