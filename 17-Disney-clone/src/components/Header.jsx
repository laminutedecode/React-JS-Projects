
import { useState } from 'react';
import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { PiTelevisionFill } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import Logo from "../assets/disney-logo.png";

import HeaderItems from "../components/HeaderItems";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = ()=> {
      setMenuOpen(!menuOpen)
  }

  const menu = [
    {
      name: "HOME",
      icon: FaHome,
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "PLUS",
      icon: FaPlus,
    },
    {
      name: "FAVORIES",
      icon: FaStar,
    },
    {
      name: "MOVIES",
      icon: TbMovie,
    },
    {
      name: "SERIES",
      icon: PiTelevisionFill,
    },
  ]


  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">

        <img className="max-w-[80px] object-cover" src={Logo} alt="" />

        <div className="hidden md:flex gap-6 items-center">
         {menu.map((item)=> (
          <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
         ))}
        </div>

        <div className="flex md:hidden gap-6 items-center">
          {menu.map((item, index)=> index < 3 &&  (
            <HeaderItems key={item.name} name={''} Icon={item.icon} />
          ))}
        </div>

        <div className="md:hidden relative "  onClick={handleMenu}>
          <HeaderItems name={''} Icon={HiDotsVertical} />
          {menuOpen ? <div className="z-[100] absolute mt-3 bg-[#060a12] border border-gray-700 px-6 py-3 flex flex-col gap-2 rounded-md ">
            {menu.map((item, index)=> index >= 3 &&  (
              <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div> : null}
        </div>
        
      </div>
      <div>
        <img className="w-10 h-10 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User image" />
      </div>
    </div>
  )
}
