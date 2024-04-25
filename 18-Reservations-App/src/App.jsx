
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import ListRdv from './Pages/ListRdv'
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rdv" element={<ListRdv/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
