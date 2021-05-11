import React from "react";
import Modal from "react-modal";

import ContactForm from "./contact-form";
import CloseButton from "./close-button";

export default function JoinModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: 60,
          backgroundColor: "white",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: 0,
        },
      }}
      onRequestClose={onRequestClose}
    >
      <div className="bg-white md:h-96 flex flex-col justify-center items-center mb-24 sm:mb-32">
        <div className="container mx-auto p-4">
          <div className="flex flex-row justify-end mt-24">
            <CloseButton className="cursor-pointer" onClick={onRequestClose} />
          </div>
          <div className="font-semibold text-2xl md:text-3xl mb-2 text-rich-black">
            Interested in bringing Trustlines to your community?
          </div>
          <div className="font-normal text-sm md:text-xl text-rich-black">
            Let us know, and we&apos;ll help you get started!
          </div>
          <ContactForm />
        </div>
      </div>
    </Modal>
  );
}
