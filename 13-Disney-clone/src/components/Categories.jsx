import disneyLogo from "../assets/Images/disney.png"
import marvelLogo from "../assets/Images/marvel.png"
import nationalGLogo from "../assets/Images/nationalG.png"
import pixar from "../assets/Images/pixar.png"
import starwars from "../assets/Images/starwars.png"
import disneyVideo from "./../assets/Videos/disney.mp4"
import marvelVideo from "./../assets/Videos/marvel.mp4"
import nationalGeoVideo from "./../assets/Videos/national-geographic.mp4"
import pixarVideo from "./../assets/Videos/pixar.mp4"
import starwarsVideo from "./../assets/Videos/star-wars.mp4"

export default function Categories() {

  const ListCategories = [
    {id: 1, logo: disneyLogo, video: disneyVideo},
    {id: 2, logo: marvelLogo, video: marvelVideo},
    {id: 3, logo: pixar, video: pixarVideo},
    {id: 4, logo: starwars, video: starwarsVideo},
    {id: 5, logo: nationalGLogo, video: nationalGeoVideo},
  ]

  return (
    <div className="flex items-center gap-5 px-5 md:px-16  p-2 overflow-hidden relative">
      {ListCategories.map((item)=> (
        <div key={item.id} className="bg-transparent border-[2px] border-gray-200 rounded-md cursor-pointer hover:scale-110 transition-all shadow-xl shadow-black">
          <video className="w-full h-full absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50" autoPlay loop muted playsInline src={item.video}></video>
          <img className="w-full z-[1]" src={item.logo} alt="Logo categories" />
          </div>
      ))}
    </div>
  )
}
