import React from 'react'
import Card from '../../Composants/Cards/Cards'
import './Home.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {getArticles} from '../../Reducer/articles/articleReducer'
import {v4 as uuid4} from 'uuid'

import {Link} from 'react-router-dom'


export default function Home() {

const {articles} = useSelector(state => ({
  ...state.articleReducer
}))

const dispatch = useDispatch()

useEffect(()=> {
if(articles.length === 0){
  dispatch(getArticles())
}
}, [])


  return (
    <>
      <header className="container-header">
        <h1 className="title">GAME BLOG</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
          et?
        </p>
      </header>
      <h2>Les articles</h2>
      <div className="container-cards">
        {articles.map((item) => {
          return (
            <Card key={uuid4()}>
              <h3>{item.title}</h3>
              <Link to={{
                  pathname: `/articles/${item.title.replace(/\s+/g, "-")}`,
                  state: {
                    title: item.title,
                    body: item.body,
                  },

                  // aller dans le app.js
                }}
              >
                Lire la suite
              </Link>
            </Card>
          );
        })}
      </div>
    </>
  );
}
