import { IoIosSearch } from "react-icons/io";


export default function Search() {
  return (
   <div className="border-b-2 pb-5">
     <div className="max-w-[670px] shadow-md rounded-full m-auto border border-gray-300 flex items-center gap-3 overflow-hidden">
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Destination</p>
        <span className="text-sm">Rechercher une destination</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Arrivée</p>
        <span className="text-sm">Quand ?</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold ">Départ</p>
        <span className="text-sm">Quand ?</span>
      </button>
      <button className="flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Voyageurs</p>
        <span className="text-sm">Ajouter un voyageurs</span>
      </button>
      <button className="rounded-full bg-[#FF5A5F] hover:bg-[#FC642D] text-white text-2xl p-3"><IoIosSearch/> </button>
    </div>
   </div>
  )
}
