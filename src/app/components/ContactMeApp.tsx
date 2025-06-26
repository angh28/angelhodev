import { useState } from "react";
import Image from "next/image";
import { CustomModal } from "./CustomModal";

export const ContactMeApp = () => {
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
        className="flex flex-col justify-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-105 duration-200
    "
        onClick={() => {
          openModal();
        }}
      >
        <div className="flex justify-center items-center rounded-4xl text-7xl w-[120px] h-[120px] md:text-8xl md:w-[150px] md:h-[150px] bg-mylightblue">
          🔮
        </div>
        <div className="font-bold text-l md:text-xl text-mydarkpurple">
          contact me{" "}
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
            Contact Me
          </div>
          <div className="flex flex-col">
            <button
              className="flex gap-2 grow-0 items-center cursor-pointer bg-myblue hover:bg-blue-400 text-white font-bold mt-5 md:mt-8 py-2 px-4 rounded-2xl w-35 "
              onClick={() =>
                (window.location.href = "mailto:ah.angelho@gmail.com")
              }
            >
              <div className="text-2xl">💌 </div>
              Email me
            </button>
            <button
              className="flex gap-1.5 grow-0 items-center cursor-pointer bg-myblue hover:bg-blue-400 text-white font-bold mt-5 py-2 px-4 rounded-2xl w-35"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/angel-ho-269629263/",
                  "_blank"
                )
              }
            >
              <Image
                src={`/images/linkedin_icon.png`}
                width={30}
                height={30}
                alt={"Linkedin Icon"}
              ></Image>
              LinkedIn
            </button>
            <button
              className="flex gap-2 items-center cursor-pointer grow-0 bg-myblue hover:bg-blue-400 text-white font-bold mt-5 py-2 px-4 rounded-2xl w-35"
              onClick={() => window.open("https://github.com/angh28", "_blank")}
            >
              <Image
                src={`/images/github_icon.png`}
                width={25}
                height={25}
                alt={"Github Icon"}
              ></Image>
              Github
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};
