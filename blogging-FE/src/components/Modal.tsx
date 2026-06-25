import React from "react";
import { Modal } from "antd";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal open={isOpen} onCancel={onClose} footer={null} centered width={448}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
