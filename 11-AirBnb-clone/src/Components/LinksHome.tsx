import React from 'react';

const LinksHome: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-[1200px] m-auto py-8">
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Assistance</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">Centre d'aide</a></li>
        <li><a href="#" className="hover:underline">AirCover</a></li>
        <li><a href="#" className="hover:underline">Lutte contre la discrimination</a></li>
        <li><a href="#" className="hover:underline">Assistance handicap</a></li>
        <li><a href="#" className="hover:underline">Options d'annulation</a></li>
      </ul>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Accueil de voyageurs</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">J'ai un problème de voisinage</a></li>
        <li><a href="#" className="hover:underline">Mettez votre logement sur Airbnb</a></li>
        <li><a href="#" className="hover:underline">AirCover pour les hôtes</a></li>
        <li><a href="#" className="hover:underline">Ressources pour les hôtes</a></li>
        <li><a href="#" className="hover:underline">Forum de la communauté</a></li>
      </ul>
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-3">Airbnb</h4>
      <ul className="flex flex-col gap-3">
        <li><a href="#" className="hover:underline">Newsroom</a></li>
        <li><a href="#" className="hover:underline">Nouvelles fonctionnalités</a></li>
        <li><a href="#" className="hover:underline">Carrières</a></li>
        <li><a href="#" className="hover:underline">Investisseurs</a></li>
        <li><a href="#" className="hover:underline">Cartes cadeaux</a></li>
      </ul>
    </div>
  </div>
  
  );
};

export default LinksHome;
