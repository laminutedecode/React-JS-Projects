import './App.css'
import React, {useState, useEffect} from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from "../config/firebase"

import Logo from './assets/logo.png'
import {FiSearch} from "react-icons/fi"
import {BsPlusCircleDotted} from "react-icons/bs"
import Not from './composants/Not'
import Card from './composants/Cards'


import AddAndUpdate from './composants/AddAndUpdateContact'
import useModal from './hook/useModal'
import { ToastContainer } from "react-toastify";

const App = () => {
  
  const [contact, setContact] = useState([]); 
  const {openModal, onClose, onOpen} = useModal();
  
  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
    onSnapshot(contactRef, (snapshot)=> {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setContact(contactList);
      return contactList
 });
} catch (error){
        console.log(error);
      }
    };
    getContacts();
  }, []);




    const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
  <div className="mx-auto max-w-[500px] px-4">
    
      <div className="flex justify-center items-center p-9 shadow-lg mb-5">

         <img className="w-16" src={Logo} alt="" />

       </div>

       <div className='p-4 relative flex items-center flex-grow gap-4'>

          <input 
           onChange={filterContacts}
            type="text"
            className=" h-10 flex-grow rounded-md bg-transparent border border-dark py-2 pl-10 text-gray-500	 " />

         <div className="absolute ml-2">
            <FiSearch className="text-3xl text-gray-500	 " />
          </div>

          <BsPlusCircleDotted onClick={onOpen} className="text-5xl text-gray-500 cursor-pointer	" />

      </div>
        
        <div>
        {contact.length <= 0 ? (
            <Not />
          ) : (
        contact.map((contact) => (
        <Card 
          key={contact.id}
          contact={contact}
        />
        )))}
        </div>
  </div>
  <ToastContainer position="bottom-center" />
  <AddAndUpdate 
      openModal={openModal}
      onClose={onClose}
  />
    </>
  )
}

export default App
