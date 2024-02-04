
import React, {useState} from 'react'
import './Slider.css'

import dataSlider from './dataSlider'

import BtnsSlider from './BtnsSlider'

export default function Slider() {

const [slider, setSlider] = useState({
  index: 1,
  inProgress: false
})



const nextSlider = () => { 
  console.log("next");

  if(slider.index !== dataSlider.length && !slider.inProgress){
    setSlider({index: slider.index + 1, inProgress: true})

    setTimeout(() => {
      setSlider({index: slider.index + 1, inProgress: false})
    },400)
  }
  else if(slider.index === dataSlider.length && !slider.inProgress)  {
     setSlider({index: 1, inProgress: true})

     setTimeout(() => {
      setSlider({index: 1, inProgress: false})
    },400)
  }
}


const previousSlider = () => { 
  
  console.log("previous");
    if(slider.index !== 1 && !slider.inProgress){
    setSlider({index: slider.index - 1, inProgress: true})
    setTimeout(() => {
      setSlider({index: slider.index - 1, inProgress: false})
    },400)
  }
  else if(slider.index === 1 && !slider.inProgress)  {
     setSlider({index: 5, inProgress: true})

      setTimeout(() => {
      setSlider({index: 5, inProgress: false})
    },400)
  }
}


const moveDot = index => {
   setSlider({index: index, inProgress: false})
}

  return (
    <div className='containerSlider'>
    {dataSlider.map((obj, index) => {
      return (
        // 4) afficher les images 
        <div key={obj.id}
        className={slider.index === index + 1 ? "slide active-slider" : "slide"}>
          <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
        </div>
      )
    })}
    {/*  6) Afficher les boutons et leurs passer des props */}
    <BtnsSlider moveSlider={nextSlider} direction="next" />
    <BtnsSlider moveSlider={previousSlider} direction="previous" />

    <div className="dots-cont">
        {Array.from({length: 5}).map((item, index) => {
        return <button className={slider.index === index + 1 ? "dots active-dots" : "dots"} 
        onClick={() => moveDot(index + 1)}
        ></button>
      })}
    
    </div>
    </div>
  )
}
