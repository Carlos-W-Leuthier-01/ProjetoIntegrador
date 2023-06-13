import React, { useState } from 'react';
import style from './modal.module.css'
import ModalSucess from '../ModalSucess/ModalSucess'

const ModalConfirm = ({ onConfirm, onCancel }) => {

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    
  };

  const openSucessModal = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleAdd = () => {
    closeSuccessModal();
  };

  
  const shouldShowModal = true;

  if (showSuccessModal) {
    return (
      <div className="modal-overlay">
        <ModalSucess onConfirm={handleAdd} onClose={handleSuccessClose} />
      </div>
    );
  }

  if (!shouldShowModal) {
    return null;
  }

  return (

    <div className={style.container}>
    <button onClick={onCancel} className={style.btnCan}>X</button>
      <h2 className={style.title}>Confirmação</h2>
      <p className={style.subtitle}>Deseja realmente adicionar?</p>
      <p className={style.p}>Curso: Sistemas para Internet</p>
      <p className={style.p}>Disciplina: Teste de Software</p>
      <p className={style.p}>Professor: Rafaella</p>
      <p className={style.p}>Sala: B-202</p>
      <button onClick={openSucessModal} className={style.btnAdd}>Sim</button>

      
    </div>
  );
};

export default ModalConfirm;
