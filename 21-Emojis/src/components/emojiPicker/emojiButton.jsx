

export default function EmojiButton({emoji, onClick}){
  function handleClick(){
    onClick(emoji)
  }


  return <button onClick={handleClick}>{emoji.symbol}</button>
}