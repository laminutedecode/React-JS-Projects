import {RiEditCircleLine } from 'react-icons/ri'
import {IoMdTrash } from 'react-icons/io'
import {deleteDoc, doc} from 'firebase/firestore'
import {db} from '../../config/firebase'

import AddAndUpdate from './AddAndUpdateContact'
import useModal from '../hook/useModal'

const Card = ({contact}) => {

    const {openModal, onClose, onOpen} = useModal();


    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, 'contact', id))
        } catch (error){
            console.log(error);
        }
    }

    return (
      <>        
<div key={contact.id} className="shadow-lg rounded-lg  flex flex-col gap-3 border border-teal-500 p-5 my-5">

    <ul className="flex flex-col">
        <li className="flex items-center bg-teal-500		 p-3 text-sm	">
            <span className="font-bold text-white mr-2">Nom :</span>
            <span className="text-white">{contact.name}</span>
        </li>
        <li className="flex items-center bg-teal-600 p-3 text-sm	">
            <span className="font-bold text-white mr-2">Prénom :</span>
            <span className="text-white">{contact.firstname}</span>
        </li>
        <li className="flex items-center bg-teal-500	 p-3 text-sm	">
            <span className="font-bold text-white mr-2">E-mail :</span>
            <span className="text-white">{contact.email}</span>
        </li>
        <li className="flex items-center bg-teal-600 p-3 text-sm	">
            <span className="font-bold text-white mr-2">Téléphone :</span>
            <span className="text-white">{contact.phone}</span>
        </li>
    </ul>
    <div className="flex items-center gap-5 p-4">
        <RiEditCircleLine 
        onClick={onOpen}
        className="text-white bg-yellow-500 cursor-pointer p-1 rounded text-3xl	 " />
        <IoMdTrash
        onClick={() => deleteContact(contact.id)}
        className="text-white bg-red-500 cursor-pointer p-1 rounded  text-3xl	" />
    </div>
</div>
<AddAndUpdate 
        contact={contact}
        isUpdate
      openModal={openModal}
      onClose={onClose}
  />
      </>
    );
  }
  
  export default Card;
