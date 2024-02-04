import './emojiPicker.scss';
import {forwardRef, useState, useRef, useEffect} from 'react'
import {data as emojiList} from './data'
import EmojiSearch from './emojiSearch';
import EmojiButton from './emojiButton';

export function EmojiPicker(props, inputRef){

const [isOpen, setIsOpen] = useState(false);

const [emojis, setEmojis] = useState(emojiList);


const containerRef = useRef(null);

useEffect(()=> {
  window.addEventListener('click', (e) => {
    if(!containerRef.current.contains(e.target)){
      setIsOpen(false);
      setEmojis(emojiList)
    }
  })
}, []);


function handleClickOpen(){
  setIsOpen(!isOpen)
}

function handleSearch(e){
  e.preventDefault();
  const value = e.target.value.toLocaleLowerCase();
  if(!!value){
    const search = emojiList.filter((emoji) => {
      return (
        emoji.name.toLowerCase().includes(value) || (Array.isArray(emoji.keywords) && emoji.keywords.some(keyword => keyword.toLowerCase().includes(value)))
      );
    });
    
    setEmojis(search)
  }else {
    setEmojis(emojiList)
  }
}



function handleEmoji(emoji){
  const cursorPos= inputRef.current.selectionStart;
  const text = inputRef.current.value;
  const prev = text.slice(0, cursorPos);
  const next = text.slice( cursorPos);

  inputRef.current.value = prev + emoji.symbol + next;
  inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
  inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
  inputRef.current.focus()
}

  return (
    <div  ref={containerRef}>
     <button className='btn-emoji'  type="button" onClick={handleClickOpen}>😀 ...</button>

     {isOpen ? <div>
    <EmojiSearch onSearch={handleSearch} />
    <div className='listEmoji'>
      {emojis.map((emoji) => (
        <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleEmoji} />
      ))}
    </div>
  </div> : ""}
    </div>
  )
}

export default forwardRef(EmojiPicker) 