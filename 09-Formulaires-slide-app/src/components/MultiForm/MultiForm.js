import React, {useState} from 'react'
import "./MultiForm.css"
import ProgressBar from './elements/progressbar/ProgressBar'
import CardStart from './elements/carte/CarteStart'
import CardEnd from './elements/carte/CarteEnd'
import FormInfos from './SubForms/Formulaire-Info'
import FormPseudo from './SubForms/Formulaire-pseudo'
import FormMdp from './SubForms/Formulaire-mdp'



export default function MultiForm() {


  const [formsIndex, setFormsIndex] = useState(1);
  const [dataForms, setDataForm] = useState({
    nom: "",
    prenom: "",
    age: "",
    mail: "",
    pseudo: "",
    mdp: "",

  })

  const modifIndex = (index, data) => {
    setFormsIndex(index)

if(data){
  const newData = {...dataForms}
  // Object renvoi un tableau pour chaque element du tableau les propriete de lobject
  const premierProps = Object.keys(data)[0];
  newData[premierProps] = data[premierProps];
  setDataForm(newData);
}

  }
console.log(dataForms);

const elements = [
  <CardStart modifIndex={modifIndex} />,
  <FormInfos modifIndex={modifIndex} />,
  <FormPseudo modifIndex={modifIndex} />,
  <FormMdp modifIndex={modifIndex} />,
  <CardEnd modifIndex={modifIndex} />,
];    



  return (
    <div>
      <ProgressBar formsIndex={formsIndex} />

      {/* <Indicator formIndex={formIndex} /> */}

      {elements.map((item, index) => {
        if (index + 1 === formsIndex) {
          return elements[index];
        }
      })}

      {/* { formsIndex === 1 ? <CardStart modifIndex=       {modifIndex} /> 
            : formsIndex === 2 ? <Form1 modifIndex={modifIndex} />
            : formsIndex === 3 ? <Form2 modifIndex={modifIndex} />
            : formsIndex === 4 ? <Form3 modifIndex={modifIndex} />
            : formsIndex === 5 ? <CardEnd modifIndex={modifIndex} />
            : ""}  */}
    </div>
  );
}
