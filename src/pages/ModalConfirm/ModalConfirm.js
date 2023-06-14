import React, { useState } from 'react';
import style from './modal.module.css';
import ModalSuccess from '../ModalSucess/ModalSucess';

const ModalConfirm = ({ onConfirm, onCancel, curso, disciplina, professor, sala }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
  };

  const openSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleAdd = () => {
    closeSuccessModal();
  };

  if (showSuccessModal) {
    return (
      <div className="modal-overlay">
        <ModalSuccess onConfirm={handleAdd} onClose={handleSuccessClose} />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <button onClick={onCancel} className={style.btnCan}>
        X
      </button>
      <h2 className={style.title}>Confirmação</h2>
      <p className={style.subtitle}>Deseja realmente adicionar?</p>
      <p className={style.p}>Curso: {curso}</p>
      <p className={style.p}>Disciplina: {disciplina}</p>
      <p className={style.p}>Professor: {professor}</p>
      <p className={style.p}>Sala: {sala}</p>
      <button onClick={openSuccessModal} className={style.btnAdd}>
        Sim
      </button>
    </div>
  );
};

export default ModalConfirm;
