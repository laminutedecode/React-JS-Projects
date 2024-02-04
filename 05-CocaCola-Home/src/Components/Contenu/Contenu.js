import React, {useContext} from 'react'
import {Context} from '../../context/langContext'
import './Contenu.css'
import data from '../../assets/data.js'
import coca1 from './coca-01.png'

export default function Contenu() {

    const {lang} = useContext(Context)

  

    return (
    
        <div className="global">
          <div className="item-left">
        <h1 className="title">{data[lang].title}</h1>
        <p className="subtitle">{data[lang].txt}</p>
        <p className="text">{data[lang].ctn}</p>
        <button className="btn-content">{data[lang].btn}</button>
          </div>
          <div className="item-right">
            <img src={coca1} alt="" />
          </div>
        </div>
   
    );
}
