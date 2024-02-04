
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {




  const dispatch = useDispatch();

  const preventForm = (e) => {
    e.preventDefault();
    const newArticle = {
      title: inputsRef.current[0].value,
      body: inputsRef.current[1].value,
    }

dispatch({
  type: "ADDARTICLE",
  playload: newArticle
})
e.target.reset();
  };
  
  const inputsRef = useRef([])

const addRef = el => {
  if(el && !inputsRef.current.includes(el)){
    inputsRef.current.push(el)
  }
}


  return (
    <>
      <h1 className="title-form">Créer un article</h1>
      {/* 4) on le rajoute au formulaire */}
      <form onSubmit={preventForm} action="" className="container-form">
        {/* 6) je le rajoute sur mes inputs */}
        <label htmlFor="title">Titre</label>
        <input
          ref={addRef}
          id="title"
          type="text"
          placeholder="Choissiez un  titre"
          className="inp-title"
        />
        <label htmlFor="article">Article</label>
        <textarea
          ref={addRef}
          id="article"
          placeholder="Editer votre article"
          className="inp-body"
        ></textarea>
        <button className="btn-form">Valider</button>
      </form>
    </>
  );
}
