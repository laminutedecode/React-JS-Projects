import React from 'react'
import styles from './formulaire.module.css'
import Image from '../../assets/home.svg'
import Boutons from '../boutons/Boutons'
import {BsChatDotsFill} from 'react-icons/bs'
import {IoIosCall} from 'react-icons/io'

const Formulaire = () => {
  return (
   <section className={styles.formulaire_container}>

        <div className={styles.formulaire_form}>

            <div className={styles.formulaire_btns}>
            <Boutons text='Via le chat' icon={<BsChatDotsFill/>} />
            <Boutons text='Par téléphone' icon={<IoIosCall/>} />
            </div>

                <h2>Contacter nous par mail</h2>

                <form className={styles.formulaire}>
                    <div className={styles.inputGroup}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom"/>
                    </div>
                    <div className={styles.inputGroup}>
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" name="prenom"/>
                    </div>
                    <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    </div>
                    <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"></textarea>
                    </div>
                    <Boutons text="Envoyer "/>
                </form>


        </div>

        <div className={styles.formulaire_form}>
            <img src={Image} alt="" />
        </div>

   </section>
  )
}

export default Formulaire;
