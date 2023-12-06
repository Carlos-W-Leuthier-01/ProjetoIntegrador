import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import emailhome from "../../images/emailhome.png";
import search from "../../images/search.png";
import Modal from "../Modal/Modal"

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState('')
  
  const openModal = () => {
    setModalIsOpen(true);
   };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  //const handleConfirmSelection = (curso, disciplina) => {
    //setCurso(curso);
    //setDisciplina(disciplina);
  //};


  return (
    <div className={style.background}>
      <header className={style.header}>
        <div className={style.person}></div>
        <div className={style.section}>
          <h2 className={style.name}>Helena dos Santos</h2>
          <img src={emailhome} className={style.emailhome}></img>
          <p className={style.email}>email@helena.com</p>
          <img></img>
        </div>
      </header>
      <div className={style.Btn}>
        <button className={style.BtnGen}>Gerenciar salas</button>
        <button className={style.BtnDoc}>Documentos</button>
        <button className={style.BtnPre}>Preferências</button>
        <button className={style.BtnOut}>Outros</button>
      </div>

      <section className={style.session}>
        <h2 className={style.h2}>Solicitações</h2>
        <input type="text" className={style.Input}></input>
        <button className={style.BtnAdd} onClick={openModal}>Adicionar</button>
          {modalIsOpen && (
            <div>
              <Modal onRequestClose={closeModal} />
            </div>
          )}
      </section>
      <div className={style.Info}>
        <div className={style.Box}>
          <p className={style.Sip}>SI</p>
        </div>
        <div className={style.info}>
          <h5 className={style.hinfo}>
            {cursoSelecionado} - {disciplinaSelecionada}
          </h5>
          <p className={style.pinfo}>23/10/2023</p>
        </div>
      </div>
    </div>
  );
}