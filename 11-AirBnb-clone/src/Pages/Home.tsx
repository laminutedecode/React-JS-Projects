import CardList from "../Components/CardList"
import Categories from "../Components/Categories"
import Nav from "../Components/Nav"
import Search from "../Components/Search"
import Footer from "../Components/Footer"
import LinksHome from "../Components/LinksHome"

export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
      <LinksHome />
      <Footer />
    </>
  )
}
