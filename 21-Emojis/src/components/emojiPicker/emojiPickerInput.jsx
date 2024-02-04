import EmojiPicker from './emojiPicker'
import {useRef} from 'react';

export default function EmojiPickerInput(){

  const refInput = useRef(null)



  return <div className='box-emoji'>
    <label htmlFor="message">Message</label>
    <EmojiPicker ref={refInput} />
    <textarea id="message"ref={refInput}></textarea>
  </div>
}