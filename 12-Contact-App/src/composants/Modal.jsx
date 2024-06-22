import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, openModal, children }) => {
  return createPortal(
    <>
      {openModal && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4 shadow-lg border border-teal-500 rounded ">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;