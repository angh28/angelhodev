import Image from "next/image";
import { useState } from "react";
import { CustomModal } from "./CustomModal";

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
      <CustomModal isOpen={modalOpen} onRequestClose={closeModal}>
        <div>
          <button
            className="text-2xl cursor-pointer hover:scale-105 duration-200"
            onClick={closeModal}
          >
            ⬅️
          </button>
          <div className="pt-3 text-xl md:text-2xl font-bold underline decoration-myblue decoration-wavy underline-offset-3 md:underline-offset-6">
            About Me
          </div>
        </div>
      </CustomModal>
    </div>
  );
};
