import React from 'react'
import './Article.css'
import { useLocation } from "react-router-dom";


export default function Article() {
  const location = useLocation()
  console.log(location);
  
  

   return (
     <div className="article-content">
   <h3>titre</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa eveniet nam nostrum harum aut esse molestias reiciendis possimus tenetur alias commodi voluptatibus minus explicabo, odio aperiam quis est? Veritatis ex voluptas corporis recusandae nostrum ducimus nihil repudiandae. Aperiam, id veritatis. Ducimus, dolore? Beatae exercitationem corporis consectetur id minus eos?</p>
     </div>
   );
}
