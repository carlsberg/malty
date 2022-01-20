import React, { useState } from 'react';
import { RealModal } from './RealModal';

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#eee' }}>
      <button onClick={openModal} type="button">
        Modal trigger
      </button>
      <RealModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
