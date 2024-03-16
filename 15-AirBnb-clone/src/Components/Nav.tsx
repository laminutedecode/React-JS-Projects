import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="w-full flex justify-between items-center p-3">

      <Link className="flex items-center gap 1rem font-bold text-2xl gap-1 text-[#FF5A5F]" to="/">
        <FaAirbnb className="text-4xl" />
        <span >airbnb</span>
      </Link>

      <ul className="hidden md:flex items-center-justify-center gap-4 ">
        <li className="font-bold text-[#484848]"><a href="#">Logements</a></li>
        <li className="text-[#484848]"><a href="#">Expériences</a></li>
        <li className="text-[#484848]"><a href="#">Expériences en ligne</a></li>
      </ul>

      <div className="flex items-center justify-center gap-3">
        <a href="#"><TbWorld /></a>
        <div className="flex items-center justify-center gap-3 border border-[rgb(237,237,237)] p-3 rounded-full hover:shadow-md cursor-pointer">
          <IoMdMenu className="text-xl"/>
          <FaCircleUser className="text-3xl" />
        </div>
      </div>

    </nav>
  )
}
