import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let rafId2: number | null = null;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      rafId = requestAnimationFrame(() => {
        setVisible(true);
        rafId2 = requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      document.body.style.overflow = "";
      rafId = requestAnimationFrame(() => setAnimating(false));
      const timeout = setTimeout(() => setVisible(false), 200);

      return () => {
        clearTimeout(timeout);
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (rafId2 !== null) cancelAnimationFrame(rafId2);
      };
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (rafId2 !== null) cancelAnimationFrame(rafId2);
    };
  }, [isOpen]);

  if (!visible) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
        animating ? "bg-black/50 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4 transition-all duration-200 ${
          animating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
        >
          <IoMdClose size={20} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
