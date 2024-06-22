import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
