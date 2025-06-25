import Modal from "react-modal";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactElement;
}

export const CustomModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute p-3 bg-mybeige w-[350px] h-[600px] left-[50%] top-[50%] ml-[-175px] mt-[-300px] md:w-[700px] md:h-[700px] md:left-[50%] md:top-[50%] md:ml-[-350px] md:mt-[-350px] overflow-auto rounded-[15px] border-solid border-4 border-mylightblue"
    >
      {children}
    </Modal>
  );
};
