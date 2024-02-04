import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Index from './pages/index';
import CreateBook from './pages/createBook';
import SingleBook from './pages/singleBook';
import Store from './store/store'

function App() {


  return (
    
    <Store>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='createBook' element={<CreateBook />} />
        <Route path='single/:bookId' element={<SingleBook />} />
      </Routes>
    </BrowserRouter>
    </Store>
   
  )
}

export default App
