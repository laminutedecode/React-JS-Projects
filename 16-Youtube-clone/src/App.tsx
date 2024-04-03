import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Single from './pages/Single.tsx';


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
