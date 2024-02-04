import { Link } from "react-router-dom"
export default function Book({item}){
  return (
    <>
    <Link to={`/single/${item.id}`}>
    <img src={item.cover} alt={item.title} />
    </Link>
    </>
  )
}