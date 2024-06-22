import Navbar from '../../components/Navbar/Navbar'
import Btns from '../../components/Btns/Btns'
import SignIn from "../../components/Forms/SignIn"
import SignUp from "../../components/Forms/SignUp"
import './home.css'

export default function Home(){
  return (
    <div className="container-global">
      <Navbar />
      <div className="content">
        <h1>Bienvenue sur le site</h1>
        <p>Identifiez vous ou créer un compte</p>
        <Btns />
      </div>
      <SignIn />
      <SignUp />
    </div>
  )
}