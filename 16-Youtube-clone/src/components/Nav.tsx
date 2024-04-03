import { IoIosSearch, IoMdClose  } from "react-icons/io";
import { FaMicrophone, FaYoutube, FaBell  } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiSolidVideoPlus } from "react-icons/bi";
import LogoProfil from '../assets/logo-profil.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store/slice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";




export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };
  return (
    <div className="flex justify-between items-center h-14 px-14 bg-[#fff] opacity-95 sticky top-0 z-100">

      <div className="flex gap-8 items-center text-2xl">

        <div>
          <FiMenu className="cursor-pointer"/>
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <FaYoutube className="text-3xl text-red-500" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>

      </div>

      <div className="flex items-center justify-center gap-5">
        <form    onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}>
          <div className="flex bg-[#EEEAEA].items-center.h-10.px-5 pr-0">
            <div className="flex gap-4 items-center border border-slate-400	rounded-xl overflow-hidden">
              <input className="py-2 px-3 w-96" type="search" name="search" id="search" placeholder="Recherche" value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))} />
              <IoMdClose  className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}/>
              <button className="h-10 w-12 flex items-center justify-center border border-l-slate-400 hover:bg-[#e2e2e2] ">
                <IoIosSearch className="text-xl cursor-pointer" />
              </button>
            </div>
          </div>
        </form>

          <div className="hover:bg-[#e2e2e2] p-3 rounded-full cursor-pointer text-xl">
            <FaMicrophone />
          </div>

      </div>


      <div  className="flex items-center justify-center gap-5">
          <div className="hover:bg-[#e2e2e2] p-3 rounded-full cursor-pointer text-xl">
            <BiSolidVideoPlus />
          </div>
          <div className="hover:bg-[#e2e2e2]  p-3 rounded-full cursor-pointer text-xl relative">
            <FaBell />
            <span className="absolute top-0 left-6 text-xs bg-red-500 rounded-full text-white p-1 font-bold">7+</span>
          </div>
          <div className="logo-profil rounded-full cursor-pointer">
            <img className="w-8" src={LogoProfil } alt="" />
          </div>
      </div>



    </div>
  )
}
