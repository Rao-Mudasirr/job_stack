import React, { useState } from 'react';

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal}>Close Modal</button>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;