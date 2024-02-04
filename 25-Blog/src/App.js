import './App.css';
import Navbar from './Composants/Navbar/Navbar'

import Home from './Containers/Home/Home'
import Add from './Containers/Add/Add'
import Article from './Containers/Article/Article'
import Contact from './Containers/Contact/Contact'
import Footer from './Composants/Footer/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="/editer" element={<Add />}/>
      <Route path="/contact" element={<Contact />}/>

      {/* on rajoute :slug pour quil accepte tout ce qui ya apres le / */}
      <Route path="/articles/:slug" element={<Article />}/>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
