import {useState} from 'react';
import './slider.css';
import dataSlider from '../../data/dataSlider';
import BtnsSlider from '../Btns/btnsSlider';


export default function Slider(){



  const [slider, setSlider] = useState({
    index: 1,
    inProgress: false
  })

  const nextSlider = ()=> {
    if(slider.index !== dataSlider.length && !slider.inProgress){
      setSlider({index: slider.index + 1, inProgress: true})

      setTimeout(()=> {
        setSlider({index: slider.index + 1, inProgress: false})
      },400)
    }else if(slider.index === dataSlider.length && !slider.inProgress){
      setSlider({index: 1, inProgress: true})

      setTimeout(()=> {
        setSlider({index: 1, inProgress: false})
      }, 400)
    }
  }

  const previousSlider = ()=> {
    if(slider.index !== 1 && !slider.inProgress){
      setSlider({index: slider.index - 1, inProgress: true})

      setTimeout(()=> {
        setSlider({index: slider.index - 1, inProgress: false})
      },400)
    }else if(slider.index === 1 && !slider.inProgress){
      setSlider({index: 5, inProgress: true})

      setTimeout(()=> {
        setSlider({index: 5, inProgress: false})
      }, 400)
    }
  }

  const moveDot = index => {
    setSlider({index: index, inProgress: false})
  }

  return (
    <div className="containerSlider">


      {dataSlider.map((obj, index)=> {
        return (
          <div key={obj.id} className={slider.index === index + 1 ? "slide active-slider" : "slide"}>
            <img src={`/Imgs/img${index + 1}.jpg`} alt="" /> 
          
          </div>
        )
      })}

      <BtnsSlider moveSlider={nextSlider} direction="next" />
      <BtnsSlider moveSlider={previousSlider} direction="previous" />

      <div className="dots-cont">
        {Array.from({length: 5}).map((item, index)=> {
          return <button className={slider.index === index + 1 ? "dots active-dots" : "dots"} onClick={()=> moveDot(index + 1)}></button>
        })}
      </div>







    </div>
  )







}