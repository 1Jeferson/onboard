import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Close } from '../assets/icons';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      {createPortal(
        <div className='fixed inset-0 flex items-center justify-center bg-gray-dark-opacity' onClick={onClose}>
          <div
            className='bg-gray-x-light p-small rounded-small max-w-xlarge w-full relative text-center'
            onClick={(e) => e.stopPropagation()}
          >
            <button className='absolute top-4 right-4 cursor-pointer' onClick={onClose}>
              <Close />
            </button>
            {children}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default Modal;
