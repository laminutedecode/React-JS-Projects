import {useState} from 'react'
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import {useNavigate} from 'react-router-dom'

export default function  Create(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [completed, setCompleted] = useState(false);

    const store = useAppContext();

    const navigate = useNavigate()


    function handleChange(e){
      const name = e.target.name;
      const value = e.target.value;

      switch(name){
        case 'title':
            setTitle(value);
          break;
        case 'author':
            setAuthor(value);
          break;
        case 'introduction':
            setIntroduction(value);
          break;
        case 'completed':
            setCompleted(e.target.checked);
          break;
        case 'cover':
            setCover(value);
          break;
        default :

      }
    }

  function handleFile(e){
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function(){
      setCover(reader.result.toString())
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      author,
      title,
      introduction,
      cover,
      completed,
    };
    store.createItem(newBook);

    navigate('/')

  }

  return (
    <Layout>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre</label>
        <input 
          id='title'
          type="text" 
          name='title' 
          onChange={handleChange} 
          value={title} />
      </div>
      <div>
        <label htmlFor="author">Auteur</label>
        <input 
          id='author'
          type="text" 
          name='author' 
          onChange={handleChange} 
          value={author} />
      </div>
      <div>
        <label htmlFor="cover">Cover</label>
        <input 
          id='cover'
          type="file" 
          name='cover' 
          onChange={handleFile} />
      </div>
        <div className="container-img">
          {!!cover ? <img className='imgPreview' src={cover} alt="preview" /> : ""}
        </div>
      <div>
        <label htmlFor="introduction">Introduction</label>
        <input 
         id='introduction'
          type="text" 
          name='introduction' 
          onChange={handleChange} 
          value={introduction} />
      </div>
    
      <div>
        <label htmlFor="completed">Disponible</label>
        <input 
         id='completed'
          type="checkbox" 
          name='completed' 
          onChange={handleChange} 
          value={completed} />
      </div>
      <button className='btn'>Enregistrer</button>
    </form>
    </Layout>
  )
}