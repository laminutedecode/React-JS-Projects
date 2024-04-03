import React from 'react'
import Modal from './Modal'
import { ErrorMessage , Field, Form, Formik } from 'formik'
import {addDoc, doc, updateDoc, collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Nom requis"),
  firstname: Yup.string().required("Prenom requis"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  phone: Yup.number().required("Téléphone requis")
});

 const  AddAndUpdateContact = ({openModal, onClose, isUpdate, contact}) => {


  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, 'contact')
      await addDoc(contactRef, contact);
      onClose();
      toast.success('Contact ajouté à la liste');
    } catch (error){
      console.log(error);
    }
  }

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, 'contact', id)
      await updateDoc(contactRef, contact);
      onClose();
      toast.success('Contact modifié avec succes')
    } catch (error){
      console.log(error);
    }
  }



  return (
    <div>
           <Modal
          openModal={openModal}
          onClose={onClose}
          >
           
           <Formik
            validationSchema={contactSchemaValidation}
           initialValues = {isUpdate ? {
            name: contact.name,
            firstname: contact.firstname,
            email: contact.email,
            phone: contact.phone
           }
          : {
            name: '',
            firstname: '',
            email: '',
            phone: ''
          }}
           onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
           } 
           }
           >
          <Form className="flex flex-col gap-2">
  <div className="flex flex-col gap-1">
    <label htmlFor="name" className="text-gray-700">Nom</label>
    <Field name="name" className="border h-10 border-teal-500 rounded p-4"/>
          <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="firstname" className="text-gray-700">Prenom</label>
    <Field name="firstname" className="border h-10 border-teal-500 rounded p-4"/>
    <div className=" text-xs text-red-500">
                <ErrorMessage name="firstname" />
              </div>
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="email" className="text-gray-700">Email</label>
    <Field name="email" className="border h-10 border-teal-500 rounded p-4"/>
    <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="phone" className="text-gray-700">Téléphone</label>
    <Field name="phone" className="border h-10 border-teal-500 rounded p-4"/>
    <div className=" text-xs text-red-500">
                <ErrorMessage name="phone" />
              </div>
  </div>

  <button type="submit" className="bg-teal-500 px-3 py-1.5 text-white my-3 self-end">
    {isUpdate ? 'Modifier le' : "Ajouter un"} contact
  </button>

</Form>
           </Formik>
           

            </Modal >
    </div>
  )
}

export default  AddAndUpdateContact