import { useEffect, useRef, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import callApi from '../Services/CallApi';
import CardTitle from './CardTitle';
import Card from './Card';
function MovieList({genreId,indexId}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        callApi.getMovieById(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${indexId%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {indexId%3==0?<CardTitle key={index} movie={item}/> : <Card key={index} movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${indexId%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList