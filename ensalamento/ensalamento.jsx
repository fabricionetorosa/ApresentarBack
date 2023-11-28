import React, { useState, useEffect } from 'react';



export default function Ensalamento() {

  const [professores, setProfessores] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [materia, setMateria] = useState([]);
  const [dias, setDias] = useState([]);
  const [disponivelProfessor, setDisponivelProfessor] = useState;
  const [disponivelTurma, setDisponivelTurma] = useState;
  const [disponivelMateria, setDisponivelMateria] = useState;
  const [disponiveldDia, setDisponiveldDia] = useState;
  const [ensalamentos, setEnsalamentos] = useState([]);


  useEffect(() => {
    buscarProfessores();
    buscarTurmas();
    buscarDisciplinas();
    buscarDias();
  }, []);

  const buscarProfessores = async () => {
    try {
      const response = await fetch(`https://api-ensalamento.com/api/professor-pelo-nome/:materia`);
      const data = await response.json();
      setProfessores(data);
    } catch (error) {
      console.error('Erro', error);
    }
  };


  const buscarTurmas = async () => {
    try {
      const response = await fetch(`https://api-ensalamento.com/api/turmas`);
      const data = await response.json();
      setTurmas(data);
    } catch (error) {
      console.error('Erro', error);
    }
  };

 
  const buscarDisciplinas = async () => {
    try {
      const response = await fetch(`https://api-ensalamento.com/api/materia`);
      const data = await response.json();
      setDisciplinas(data);
    } catch (error) {
      console.error('Erro', error);
    }
  };

 
  const buscarDias = async () => {
    try {
      const response = await fetch(`https://api-ensalamento.com/api/dias`);
      const data = await response.json();
      setDias(data);
    } catch (error) {
      console.error('Erro', error);
    }
  };


 
}