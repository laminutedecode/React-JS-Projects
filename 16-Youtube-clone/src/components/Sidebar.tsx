import { MdHomeFilled, MdOutlineLocalFireDepartment, MdOutlinePodcasts , MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { PiClockCounterClockwise, PiFilmSlateBold  } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { IoMusicalNoteOutline, IoWarningOutline  } from "react-icons/io5";
import { CiStreamOn, CiTrophy } from "react-icons/ci";
import { LuGamepad2 } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { TfiLightBulb } from "react-icons/tfi";
import { IoIosSettings } from "react-icons/io";
import { FiHelpCircle, FiFlag  } from "react-icons/fi";


export default function Sidebar() {


  const linkList1 = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: 'Home'
    },
    {
      icon: <SiYoutubeshorts className="text-xl" />,
      name: 'Shorts'
    },
    {
      icon: <MdOutlineSubscriptions className="text-xl" />,
      name: 'Abonnements'
    },
  ]

  const linkList2 = [
    {
      icon: <PiClockCounterClockwise className="text-xl" />,
      name: 'Historique'
    },
    {
      icon: <BsClock className="text-xl" />,
      name: 'À regarder plus tard'
    },
    {
      icon: <AiOutlineLike className="text-xl" />,
      name: 'Vidéo "Jaime"'
    },
  ]

  const linkList3 = [
    {
      icon: <MdOutlineLocalFireDepartment className="text-xl" />,
      name: 'Tendance'
    },
    {
      icon: <IoMusicalNoteOutline className="text-xl" />,
      name: 'Musique'
    },
    {
      icon: <PiFilmSlateBold  className="text-xl" />,
      name: 'Films et series TV'
    },
    {
      icon: <CiStreamOn className="text-xl" />,
      name: 'Direct'
    },
    {
      icon: <LuGamepad2 className="text-xl" />,
      name: 'Jeux vidéo'
    },
    {
      icon: <FaRegNewspaper className="text-xl" />,
      name: 'Actualités'
    },
    {
      icon: <CiTrophy className="text-xl" />,
      name: 'Sport'
    },
    {
      icon: <TfiLightBulb className="text-xl" />,
      name: 'Savoirs et cultures'
    },
    {
      icon: <MdOutlinePodcasts className="text-xl" />,
      name: 'Podcasts'
    },
  ]
  const linkList4 = [
    {
      icon: <IoIosSettings  className="text-xl" />,
      name: 'Parametres'
    },
    {
      icon: <FiFlag  className="text-xl" />,
      name: 'Signalement'
    },
    {
      icon: <FiHelpCircle  className="text-xl" />,
      name: 'Help'
    },
    {
      icon: <IoWarningOutline   className="text-xl" />,
      name: 'Envoyer des commentaires'
    },
    
  ]


  const linkText1 = [
    "Présentation",
    "Presse",
    "Droits d'auteur",
    "Nous contacter",
    "Créateurs",
    "Publicité",
    "Développeurs",
  ]
  const linkText2= [
    "Conditions d'utilisation",
    "Confidentialité",
    "Règles et securité",
    "Premiers pas sur Youtube",
    "Tester de nouvelle fonctionalités",
  ]



  return (
    <div className="w-3/12 bg-[#fff] p-5 overflow-auto ">
      <ul className="flex flex-col border-b-2 border-gray-200 py-5">
          {linkList1.map(({icon, name}) => {
            return <li className={`flex items-center gap-1 p-3 cursor-pointer hover:bg-[#e2e2e2] rounded-lg ${name === 'Home' ? "bg-[#e2e2e2]" : ""}`} key={name}><p>{icon}</p><p>{name}</p></li>
          })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-200 py-5">
          {linkList2.map(({icon, name}) => {
            return <li className={`flex items-center gap-1 p-3 cursor-pointer hover:bg-[#e2e2e2] rounded-lg ${name === 'Home' ? "bg-[#e2e2e2]" : ""}`} key={name}><p>{icon}</p><p>{name}</p></li>
          })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-200 py-5">
          {linkList3.map(({icon, name}) => {
            return <li className={`flex items-center gap-1 p-3 cursor-pointer hover:bg-[#e2e2e2] rounded-lg ${name === 'Home' ? "bg-[#e2e2e2]" : ""}`} key={name}><p>{icon}</p><p>{name}</p></li>
          })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-200 py-5">
          {linkList4.map(({icon, name}) => {
            return <li className={`flex items-center gap-1 p-3 cursor-pointer hover:bg-[#e2e2e2] rounded-lg ${name === 'Home' ? "bg-[#e2e2e2]" : ""}`} key={name}><p>{icon}</p><p>{name}</p></li>
          })}
      </ul>
      <ul className="flex py-5 gap-1.5 flex-wrap">
          {linkText1.map((item) => {
            return <li className={` cursor-pointer text-sm text-gray-400 font-bold`} key={item}><p>{item}</p></li>
          })}
      </ul>
      <ul className="flex py-5 gap-1.5 flex-wrap">
          {linkText2.map((item) => {
            return <li className={` cursor-pointer text-sm text-gray-400 font-bold`} key={item}><p>{item}</p></li>
          })}
      </ul>
      <span className="text-sm text-gray-400 m-1">&copy; 2024 - Google</span>
      <span className="text-sm text-gray-400">Ceci est un clone de Youtube pour un tutoriel proposé par La Minute De Code</span>


    </div>
  )
}
