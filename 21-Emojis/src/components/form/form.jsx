import './form.scss'
import EmojiPickerInput from '../emojiPicker/emojiPickerInput'


export default function Form(){

  function handleSubmit(e){
    e.preventDefault()
  }

  return (  
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom</label>
      <input type="text" id="nom" />
      <label htmlFor="prenom">Prenom</label>
      <input type="text" id="prenom" />
      <EmojiPickerInput />
      <button className='btn'>Envoyer</button>
    </form>   
  )
}