"use client";

import { useState } from "react";
import { ListBar } from "../components/ListBar/ListBar";
import { PageBackground } from "../components/PageBackground/PageBackground";
import { ModalWrapper } from "../components/ModalWrapper/ModalWrapper";
import { AddStaffForm } from "./AddStaffForm/AddStaffForm";

export default function Staff() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <PageBackground alignItems="none" justifyContent="none">
      <ListBar onToggleModal={toggleModal} />
      <ModalWrapper isOpen={isModalOpen}>
        <AddStaffForm onClose={toggleModal} />
      </ModalWrapper>
    </PageBackground>
  );
}
