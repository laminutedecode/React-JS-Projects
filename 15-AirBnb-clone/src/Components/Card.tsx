import { FaStar, FaRegHeart  } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CardProps {
  city: string;
  country: string;
  dates: string;
  price_per_night: number;
  rating: number;
  owner: string;
  images: string[];
}

const Card: React.FC<CardProps> = ({ city, country, dates, price_per_night, rating, owner, images }) => {
  return (
    <div className="max-w  overflow-hidden cursor-pointer relative">
      <div className="text-white absolute top-5 right-5 z-50 text-xl"><FaRegHeart/> </div>
      <Carousel showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true} autoPlay={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} className='carousel-image rounded-xl' />
          </div>
        ))}
      </Carousel>
      <div className="px-1 py-4">
        <div className="flex justify-between items-center gap-1">
        <h3 className="font-bold text-sm ">{city}, {country}</h3>
        <span className="flex justify-center items-center gap-3 text-sm"><FaStar /> {rating}</span>
        </div>
        <p className="text-gray-700 text-base">Proposée par: {owner}</p>
        <p className="text-gray-700 text-base">{dates}</p>
        <p className="text-gray-700 text-base"><b>{price_per_night}€</b> <span>par nuit</span></p>
      </div>
    </div>
  );
};


export default Card