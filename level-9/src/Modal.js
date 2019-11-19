import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // we are going to have an element that we are going to create and we always want to refer to the same element
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    // now using the hook we are always going to have the same div
    // elref.current is always going to be pointing at this div
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getEelementById("modal");
    modalRoot.appendChild(elRef.current);
    // if you return a function within useEffect it will be the cleanup function
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  // createPortal allows you to render it to a different place
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
