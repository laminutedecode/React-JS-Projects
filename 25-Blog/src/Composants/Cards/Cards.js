import React from 'react'
import './Cards.css'

export default function Cards(props) {
  return (
    <div className="cards">
      {props.children}
    </div>
  )
}
