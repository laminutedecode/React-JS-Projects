import { useState } from 'react';
import { SiOpensea, SiCampaignmonitor } from 'react-icons/si';
import { GrOverview } from 'react-icons/gr';
import { MdOutlinePool, MdCabin, MdOutlineSurfing, MdOutlineTwoWheeler } from 'react-icons/md';
import { GiBigDiamondRing, GiFarmTractor, GiRiver, GiCampingTent, GiIsland, GiLuckyFisherman,GiMountainCave, GiGrapes, GiTreeBranch, GiWaterfall, GiCastle,GiWheat,GiYinYang  } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { RiArrowLeftSLine,RiArrowRightSLine } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";


enum ScrollDirection {
  LEFT = 'left',
  RIGHT = 'right'
}

export default function Categories() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const categoriesList = [
    { name: 'Bord de mer', icon: <SiOpensea /> },
    { name: 'Piscines', icon: <MdOutlinePool /> },
    { name: 'Avec vue', icon: <GrOverview /> },
    { name: 'Surf', icon: <MdOutlineSurfing /> },
    { name: 'Luxe', icon: <GiBigDiamondRing /> },
    { name: 'Campagne', icon: <SiCampaignmonitor /> },
    { name: 'À deux roues', icon: <MdOutlineTwoWheeler /> },
    { name: 'À la ferme', icon: <GiFarmTractor /> },
    { name: 'Au pied des pistes', icon: <FaSkiing /> },
    { name: 'Lacs', icon: <GiRiver /> },
    { name: 'Cabanes', icon: <MdCabin /> },
    { name: 'Cabanes perchées', icon: <GiLuckyFisherman /> },
    { name: 'Camping', icon: <GiCampingTent /> },
    { name: 'Ile', icon: <GiIsland /> },
    { name: 'Montagnes', icon: <GiMountainCave /> },
    { name: 'Vignobles', icon: <GiGrapes /> },
    { name: 'Forêts', icon: <GiTreeBranch /> },
    { name: 'Cascades', icon: <GiWaterfall /> },
    { name: 'Châteaux', icon: <GiCastle /> },
    { name: 'Plaines', icon: <GiWheat /> },
    { name: 'Retraite spirituelle', icon: <GiYinYang /> },
  ];

  const handleScroll = (direction: ScrollDirection) => {
    const scrollWidth = 250;
    const containerWidth = 400;
    if (direction === ScrollDirection.LEFT) {
      setScrollPosition(Math.max(scrollPosition - scrollWidth, 0));
    } else if (direction === ScrollDirection.RIGHT) {
      setScrollPosition(Math.min(scrollPosition + scrollWidth, categoriesList.length * scrollWidth - containerWidth));
    }
  };

  return (
    <div className="relative pt-6 px-10 flex items-center gap-3">
      {scrollPosition > 0 && (
        <button onClick={() => handleScroll(ScrollDirection.LEFT)} className="p-1 bg-white rounded-full border border-black z-10 font-bold flex items-center justify-center text-sm">
          <RiArrowLeftSLine  />
        </button>
      )}
      <div className="flex items-center  overflow-hidden">
        <div className="flex transition-all	" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          <div className="flex items-center">
            {categoriesList.map((category, index) => (
              <div key={index} className="w-32 flex-shrink-0">
                <div className="flex flex-col items-center cursor-pointer border-b-2 border-[#fff] hover:border-b-2 hover:border-[#484848] pb-2 ">
                  <span className="text-xl">{category.icon}</span>
                  <span className="mt-1 text-sm">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {scrollPosition < categoriesList.length * 200 - 400 && (
        <button onClick={() => handleScroll(ScrollDirection.RIGHT)} className="p-1 bg-white rounded-full border border-black z-10 font-bold flex items-center justify-center text-sm">
          <RiArrowRightSLine />
        </button>
      )}
      <button className="border border-[#000] flex items-center gap-1 p-2 rounded-md cursor-pointer">
        <span><IoFilterSharp/></span><span>Filtres</span>
      </button>
      
    </div>
  );
}
