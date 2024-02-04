import React from 'react'



const Liste = ({member})=> {
   return (
    <>
    {member.map((person)=>{
      const {id,name,post,image} = person;
      return <article key={id} className="container-item">
        <img src={image} alt={name} />
        <div>
          <h4 className="name">{name}</h4>
          <p className="post">{post}</p>
        </div>
      </article>
    })}
  </>
   );
};

export default Liste;
