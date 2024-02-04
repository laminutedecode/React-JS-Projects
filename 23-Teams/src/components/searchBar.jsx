import {useState} from 'react'
import Results from './results';

export default function SearchBar({items, onItemSelected}){

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);


  function handleChange(e){
    const value = e.target.value;
    setSearch(value);
  }


  function handleResults(items){
    setResults(items);
  }


  return (
    <>
    <div className="containerSearch">
    <input type="text" onChange={handleChange} value={search} />
    <Results 
      items={items}
      search={search}
      onResultatsNb={handleResults}
    />
    </div>
    
    </>
  )

}