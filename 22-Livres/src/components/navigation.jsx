
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export default function Navigation(){
  return (
    <ul className="navigation">
      <li><Link to="/"><FaHome /></Link></li>
      <li><Link to="/createBook"><CiEdit /></Link></li>
    </ul>
  )
}