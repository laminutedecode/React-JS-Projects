import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <h1 className="title-form">Restons en contact</h1>
      <form  action="" className="container-form">
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
        />
        <label htmlFor="firstname">Prenom</label>
        <input
          id="firstname"
          type="text"
        />
        <label htmlFor="mail">E-mail</label>
        <input
          id="mail"
          type="mzil"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
        ></textarea>
        <button className="btn-form">Envoyer</button>
      </form>
    </>
  );
}
