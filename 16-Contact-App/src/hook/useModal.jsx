import  {useState} from 'react'

const useModal = () => {

    const [openModal, setOpenModal] = useState(false);

    const onOpen = ()=> {
      setOpenModal(true)
    }
    const onClose = ()=> {
      setOpenModal(false)
    };

  return {openModal, onClose, onOpen};
};

export default useModal