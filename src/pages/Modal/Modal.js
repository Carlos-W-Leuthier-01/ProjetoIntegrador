import React, { useState } from 'react';
import style from './modal.module.css';
import ModalConfirm from '../ModalConfirm/ModalConfirm';

const Modal = ({ isOpen, onRequestClose }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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

  // Variável vinda da chamada de API que indica se o modal principal deve ser exibido ou não
  const shouldShowModal = true;

  if (showConfirmationModal) {
    return (
      <div className="modal-overlay">
        <ModalConfirm onConfirm={handleAdd} onCancel={closeConfirmationModal} />
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
      <input type='text' className={style.inputMaior}></input>
      <p className={style.p}>Disciplina</p>
      <input type='text' className={style.inputMaior}></input>
      <p className={style.p}>Professor</p>
      <input type='text' className={style.inputMenor}></input>
      <p className={style.p}>Sala</p>
      <input type='text' className={style.inputMenor}></input>

      <div className={style.btn}>
        <button className={style.btnCan} onClick={onRequestClose}>Cancelar</button>
        <button className={style.btnAdd} onClick={openConfirmationModal}>Adicionar</button>
      </div>
    </div>
  );
};

export default Modal;