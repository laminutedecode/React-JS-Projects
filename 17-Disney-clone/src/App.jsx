import './App.css'
import Categories from './components/Categories'
import GenreListMoovies from "./components/GenreListMoovies"
import Header from './components/Header'
import Slider from './components/Slider'

function App() {

  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <GenreListMoovies/>
    </>
  )
}

export default App
