import leftBtn from '../../assets/icons/left.svg'
import rightBtn from '../../assets/icons/right.svg'


export default function BtnsSlider({direction, moveSlider}){
  return (
    <button onClick={moveSlider} className={direction === "next" ? "btns next" : "btns previous"}>
      <img src={direction === "next" ? rightBtn : leftBtn} alt="" />
    </button>
  )
}