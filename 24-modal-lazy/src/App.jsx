import './App.scss'
import openModal from './components/openModal';


function App() {

  function handleOpenModal(){
    openModal();
  }


  return (
    <div>
      <button onClick={handleOpenModal} className='btn'>Ouvrir la modal</button>
    </div>
  )
}

export default App
