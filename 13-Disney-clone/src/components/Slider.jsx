import { useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import CallApi from "../Services/CallApi";


const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original"
const widthSlider = window.innerWidth

export default function Slider() {

  const [moviesList, setMoviesList] = useState([])

  const imageSliderRef= useRef();

  useEffect(()=> {
    getMovies()
  }, [])


  const getMovies = ()=> {
      CallApi.getVideos.then(resp => {
        // console.log(resp.data.results);
        setMoviesList(resp.data.results)
      })
  }

  console.log(moviesList);


  const sliderRight = (el)=> {
    el.scrollLeft+=widthSlider-110
  }
  const sliderLeft = (el)=> {
    el.scrollLeft-=widthSlider-110
  }

  return (
    <>
    <div className='relative z-[60]'>
      <MdArrowBackIosNew onClick={()=>sliderLeft(imageSliderRef.current)} className='hidden md:block text-white text-[25px] absolute mx-8 mt-[250px] cursor-pointer z-50'/>
      <MdArrowForwardIos onClick={()=>sliderRight(imageSliderRef.current)} className='hidden md:block text-white text-[25px] absolute mx-8 mt-[250px] cursor-pointer right-0  z-50'/>
      
    <div className='  flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={imageSliderRef}>
      {moviesList.map((item, index)=> (
        <div key={index} className='relative min-w-full md:h-[500px] mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all'>
          <img  className='w-full h-full object-cover object-left-top  ' src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt="Image film" />
          <h2 className='font-semibold text-white text-4xl absolute bottom-[2rem] left-[2rem]'>{item.name ? item.name : item.title}</h2>
          </div>
       ))}
    </div>
        </div>
    
    </>
  )
}
