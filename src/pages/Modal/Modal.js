import React, { useState, useEffect } from 'react';
import style from './modal.module.css';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

const Modal = ({ isOpen, onRequestClose }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [salas, setSalas] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState('');
  const [professorSelecionado, setProfessorSelecionado] = useState('');
  const [salaSelecionada, setSalaSelecionada] = useState('');

  const id = 'n7Du9WmGouDZ7gYjkn5MiXas8nfGjT4qFwrk45zX'
  const api = 'JuRfAoomwwFNZwdlB1Ndx4NRj9pX7gMly2aqqYb1'

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const responseCursos = await fetch('https://tcc-demanda-de-turmas.onrender.com/api/curso', {
          headers: {
            'X-Parse-Application-Id': id,
            'X-Parse-REST-API-Key': api
          }
        });
  
        const responseDisciplinas = await fetch('https://tcc-demanda-de-turmas.onrender.com/api/disciplina', {
          headers: {
            'X-Parse-Application-Id': id,
            'X-Parse-REST-API-Key': api
          }
        });
        const responseProfessores = await fetch('https://tcc-demanda-de-turmas.onrender.com/api/professor', {
          headers: {
            'X-Parse-Application-Id': id,
            'X-Parse-REST-API-Key': api
          }
        });

        const responseSalas = await fetch('https://tcc-demanda-de-turmas.onrender.com/api/sala', {
          headers: {
            'X-Parse-Application-Id': id,
            'X-Parse-REST-API-Key': api
          }
        });
  
        if (responseCursos.ok && responseDisciplinas.ok && responseProfessores.ok && responseSalas.ok) {
          const dataCursos = await responseCursos.json();
          const cursos = dataCursos.results.map(curso => curso.nomecurso);
          setCursos(cursos);

          const dataDisciplinas = await responseDisciplinas.json();
          const disciplinas = dataDisciplinas.results.map(disciplina => disciplina.nomedisciplina);
          setDisciplinas(disciplinas);

          const dataProfessores = await responseProfessores.json();
          const professores = dataProfessores.results.map(professor => professor.nomeprofessor);
          setProfessores(professores);

          const dataSalas = await responseSalas.json();
          const salas = dataSalas.results.map(sala => sala.nomesala);
          setSalas(salas);
        } else {
          console.log('Erro ao consultar cursos, disciplinas, professores ou salas');
        }
      } catch (error) {
        console.log('Erro ao consultar cursos, disciplinas, professores ou salas: ' + error.message);
      }
    };

    fetchCursos();
  }, []);;
  
  

  const openConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleAdd = () => {
    // Lógica para adicionar
    closeConfirmationModal();
  };

  const shouldShowModal = true;

  if (showConfirmationModal) {
    return (
      <div className="modal-overlay">
        <ModalConfirm 
        onConfirm={handleAdd} 
        onCancel={closeConfirmationModal}
        curso={cursoSelecionado}
        disciplina={disciplinaSelecionada}
        professor={professorSelecionado}
        sala={salaSelecionada} />
      </div>
    );
  }

  if (!shouldShowModal) {
    return null;
  }

  return (
    <div className={style.Container}>
      <h1 className={style.h1}>Adicionar nova turma</h1>

      <p className={style.p}>Curso</p>
      <select className={style.inputMaior} onChange={e => setCursoSelecionado(e.target.value)}>
        <option value="">Selecione um curso</option>
        {cursos.map((curso, index) => (
          <option key={index} value={curso}>
            {curso}
          </option>
        ))}
      </select>

      <p className={style.p}>Disciplina</p>
        <select className={style.inputMaior} onChange={e => setDisciplinaSelecionada(e.target.value)}>
          <option value="">Selecione uma disciplina</option>
          {disciplinas.map((disciplina, index) => (
            <option key={index} value={disciplina}>
              {disciplina}
            </option>
          ))}
        </select>

        <p className={style.p}>Professor</p>
          <select className={style.inputMenor} onChange={e => setProfessorSelecionado(e.target.value)}>
            <option value="">Selecione um professor</option>
            {professores.map((professor, index) => (
              <option key={index} value={professor}>
                {professor}
              </option>
            ))}
          </select>

          <p className={style.p}>Sala</p>
          <select className={style.inputMenor} onChange={e => setSalaSelecionada(e.target.value)}>
            <option value="">Selecione uma sala</option>
            {salas.map((sala, index) => (
              <option key={index} value={sala}>
                {sala}
              </option>
            ))}
          </select>


      <div className={style.btn}>
        <button className={style.btnCan} onClick={onRequestClose}>
          Cancelar
        </button>
        <button className={style.btnAdd} onClick={openConfirmationModal}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Modal;
