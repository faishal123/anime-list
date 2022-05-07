import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalMain } from "./style";

interface ModalProps {
  show: boolean;
  children: JSX.Element | JSX.Element[];
  onLeave: () => void;
  id: string;
}

const Modal: React.FC<ModalProps> = ({ show, children, onLeave, id }) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered && show) {
    return createPortal(
      <ModalContainer
        id={`${id}-container`}
        data-testid={`${id}-container`}
        onClick={(e) => {
          e.stopPropagation();
          onLeave();
        }}
      >
        <ModalMain
          id={`${id}-main`}
          data-testid={`${id}-main`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </ModalMain>
      </ModalContainer>,
      document.body
    );
  }
  return null;
};

export default Modal;
