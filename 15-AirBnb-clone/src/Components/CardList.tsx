import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, setCards } from '../slice/cardSlice';
import data from '../data/data.json';
import Card from './Card';

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => { 

    dispatch(setCards(data));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center p-10 border-b-2">
      {cards.map((item) => (
        <Card
        key={item.id}
        city={item.city}
        country={item.country}
        dates={item.dates}
        price_per_night={item.price_per_night} // Utilisez price_per_night ici
        rating={item.rating}
        owner={item.owner}
        images={item.images}
        />
      ))}
    </div>
  );
};

export default CardList;
