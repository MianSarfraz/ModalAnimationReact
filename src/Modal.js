// src/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, animationClass }) => {
  if (!isOpen) return null;

  return (
    <div id="modal-container" className={`fixed inset-0 flex items-center justify-center ${animationClass}`}>
      <div className="modal-background bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        <div className="modal bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">I'm a Modal</h2>
          <p className="text-gray-700 mb-6">Hear me roar.</p>
          <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;