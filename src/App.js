// src/App.js
import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const openModal = (animationClass) => {
    setAnimationClass(animationClass);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">CSS Modals</h1>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => openModal('animate-unfoldIn')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Unfolding</button>
          <button onClick={() => openModal('animate-fadeIn')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Revealing</button>
          <button onClick={() => openModal('animate-moveUp')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Sketch</button>
          <button onClick={() => openModal('animate-sideIn')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Side</button>
          <button onClick={() => openModal('animate-roadRunnerIn')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Speedy</button>
          <button onClick={() => openModal('animate-bondJamesBond')} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Bond</button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} animationClass={animationClass} />
      </div>
    </div>
  );
};

export default App;