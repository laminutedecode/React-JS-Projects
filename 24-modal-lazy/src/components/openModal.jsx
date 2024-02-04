import React, {Suspense, lazy} from 'react'
import {createRoot} from 'react-dom/client'
import './modal.module.scss'
export default function openModal(){
  const Modal = lazy(()=> import('./modal'));

  const modalContainer = document.createElement('div');
  modalContainer.className = "ModalContainer";
  document.body.appendChild(modalContainer);

  const root = createRoot(modalContainer);
  root.render(
    <Suspense fallback={<div>Patienter</div>}>
    <Modal root={root} title="Titre de la modal">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error veniam rerum voluptatum nemo corporis dolorem labore fugiat sequi reprehenderit est minus iusto esse quas, exercitationem doloremque quo impedit dolore accusamus eveniet. Nostrum, inventore facere. Numquam voluptas nihil quisquam, dolores voluptate iusto consectetur molestias optio, ut at cupiditate reprehenderit fugiat?</p>
    </Modal>
    </Suspense>
    )
}