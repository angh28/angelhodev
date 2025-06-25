import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const AboutMeApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-105 duration-200"
        onClick={() => {
          openModal();
        }}
      >
        <div className="flex justify-center items-center rounded-4xl w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-mylightblue">
          <Image
            src={`/images/mesmile.png`}
            width={115}
            height={115}
            alt={"smiling angel"}
            className="ml-5"
          />
        </div>
        <div className="font-bold text-l md:text-xl text-mydarkpurple">
          About me
        </div>
      </div>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <div className="text-bold"> modal</div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};
