import React from 'react'
import styles from './boutons.module.css'


const Boutons = ({icon, text}) => {
 
  return (
  <button className={styles.btn}>
    {icon}
    {text}
  </button>
  )
}

export default Boutons