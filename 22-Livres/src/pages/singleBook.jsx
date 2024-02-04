import Layout from "../components/layout";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useAppContext} from '../store/store'

export default function  SingleBook(){


    const [item, setItem] = useState(null)

    const params = useParams();

    const store = useAppContext()

    useEffect(()=> {
      const book = store.getItem(params.bookId);
      setItem(book)
    }, [])

    if(!item){
      return <div>Aucun livre trouvé</div>
    }


  return (
    <Layout>
   <div className="container-single">
   <div className="single">
      <div className="single-box">
        {item?.cover ? <img src={item?.cover} alt="" /> : ""}
      </div>
      <div className="single-box">
        <h2>{item?.title}</h2>
        <span>{item?.author}</span>
        <p>{item?.introduction}</p>
        <p className="single-badge">{item.completed ? 'En stock' : 'Indisponible'}</p>
      </div>
    </div>
   </div>
    </Layout>
  )
}