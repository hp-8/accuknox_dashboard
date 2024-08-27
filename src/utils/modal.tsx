import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
      <div className="bg-white p-6 rounded shadow-lg z-50 relative">
        <button
          className="absolute top-4 right-4 text-black"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
