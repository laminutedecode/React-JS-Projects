import {useState} from 'react';
import Item from './item';

// apres avoir installer uuid
import {v4 as uuidv4} from 'uuid'
 

export default function Form(){

const [myState, setMyState] = useState([
  {tache: "Apprendre HTML", id: uuidv4()},
  {tache: "Apprendre CSS", id: uuidv4()}
])

// il est possible de créerautant de state que l'ont veut

const [inputState, setInputState] = useState();

// pour supprimer nos elements

const deleteElement = id => {
  // console.log(id);
  const filterElement = myState.filter(item => {
    return item.id !== id;
  })
  setMyState(filterElement);
}

const newEl = e => {
e.preventDefault();
// on modifie pas directement le state on le copie
const newTab = [...myState]
// on créer un nouveau objet
const newTodo = {};
//  on lui rajoute une propriété txt et un id
newTodo.tache = inputState;
newTodo.id = uuidv4();
//  on le push dans notre nouvelle objet
newTab.push(newTodo);
// Et on change le state avec notre nouveau tableau
setMyState(newTab);
// On remet le formulaire vide une fois que cest push
setInputState('')
}


// On lie notre input
const linkInput = e => {
  setInputState(e)
}




return(
  <div className="m-auto px-3">
    <div className="columns is-desktop">
      <div className="container px-5">
        <form 
        onSubmit={e => newEl(e)}
        className='mb-3'>
          <label htmlFor="todo" className="label is-uppercase has-text-primary has-text-centered has-text-white">Écrire une tache</label>
          <input 
          value = {inputState}
          onInput={e => linkInput(e.target.value)}
          type="text" 
          id="todo" 
          className="input w-50"></input>
          <button className="button is-primary my-5 ">Envoyer</button>
        </form>
        <h2 className="title is-3 is-uppercase has-text-centered has-text-white">Liste des tâches:</h2>
        <ul>
          {/* afficher nos éléments */}
        {myState.map(item=>{
          return (
            <Item
              tache={item.tache}
              key={item.id}
              //faire npm install uuid
              id={item.id}
              // pour supprimer les elements:
              delFunc={deleteElement}
            />
          );
        })}
      
        </ul>
        
      </div>
    </div>
  </div>
)
}