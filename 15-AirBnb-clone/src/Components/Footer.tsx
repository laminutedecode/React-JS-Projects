import { TbWorld } from "react-icons/tb";
import { FaFacebookF,FaTwitter ,FaInstagram  } from "react-icons/fa";




export default function Footer() {
  return (
    <footer className="flex justify-between align-items border-t-2 m-auto max-w-[1200px]">
      <ul className="flex justify-between align-items gap-1 p-3">
        <li>&copy Airbnb, inc,</li>
        <li>&#183;</li>
        <a href="#">Confidentialité</a>
        <li>&#183;</li>
        <a href="#">Conditions générales</a>
        <li>&#183;</li>
        <a href="#">Plan du site</a>
        <li>&#183;</li>
        <a href="#">Fonctionnement du site</a>
        <li>&#183;</li>
        <a href="#">Infos sur l'entreprise</a>
      </ul >
      <ul className="flex justify-between items-center gap-2 p-3">
        <li><a href="#" className="font-bold flex items-center gap-1"><TbWorld /> <p>Francais (FR)</p></a></li>
        <li><a href="#" className="font-bold">€ EUR</a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff]  text-sm" ><FaFacebookF/></a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff]  text-sm" ><FaTwitter/></a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff] text-sm" ><FaInstagram/></a></li>
      </ul>
    </footer>
  )
}
