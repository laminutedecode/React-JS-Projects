import {useRef} from 'react';
import styles from './modal.module.scss'
export default function Modal({children, title, root}){

    const ref= useRef(null);

    function callback(){
        root.unmount();
        document.querySelector('.modalContainer').remove();
        ref.current.removeEventListener('animationend', callback)
    }

    function handleClick(){
      ref.current.classList.add(styles.fadeOut);
      ref.current.addEventListener('animationend', callback, {once: true})
    }

  return (
  
    <div ref={ref} className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <button onClick={handleClick} className="btn">x</button>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  )
}