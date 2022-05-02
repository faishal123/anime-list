import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalMain } from "./style";

const Modal = ({ show, children, onLeave = () => null }) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (rendered && show) {
    return createPortal(
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
          onLeave();
        }}
      >
        <ModalMain
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