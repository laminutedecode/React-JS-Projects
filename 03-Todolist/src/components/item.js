

export default function item(props) {
  return <li className="item-todo is-flex p-2 m-2">
    <div className="pb-3">{props.tache}</div>
    <button className="button is-danger is-small"
    onClick = {()=> props.delFunc(props.id)}
    >Supprimer</button>
  </li>;
}
