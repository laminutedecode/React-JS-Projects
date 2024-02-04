import React from 'react'
import SignUp from '../Composants/Form/Signup'
import SignIn from '../Composants/Form/Signin'
import Btns from '../Composants/Btns/btns'
import Navbar from '../Composants/Navbar/Navbar'
import './home.css'

export default function Home() {
  return (
    <div className="container-global">
      <Navbar />
      <div className="content">
        <h1>Bienvenue sur le site</h1>
        <p>Identifiez-vous ou créer un compte</p>
      <Btns />
      </div>
      <SignUp />
      <SignIn />
    </div>
  )
}
