
import React, {useState} from 'react';
import data from './data.js';
import Liste from './liste'
import './App.css';


function App() {
  const [member, setMenber] = useState(data);
  return (
   <main>
    <section className="container">
      <h3>{member.length} membres dans l'équipe</h3>
      <Liste member={member}/>
      <button onClick={()=> setMenber([])}>Supprimer tout les membres</button>
    </section>
   </main>
  );
}

export default App;
