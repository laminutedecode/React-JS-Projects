import {useState} from 'react'

export default function CreateForm(){

  const [url, setUrl] = useState('');

  function handleChange(e){
    const value = e.target.value
    setUrl(value)
  }

  function handleSubmit(e){
    e.preventDefault();
  }


  return <form onSubmit={handleSubmit}>
    <input value={url} onChange={handleChange} type="text" />
    <button type="submit">Créer un URL</button>
  </form>
}