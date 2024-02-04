import MainContainer from "../components/mainContainer"
import CreateForm from "../components/createForm"
import useReducerApp from "../store/store"

export default function Create(){

  const [state, dispatch] = useReducerApp();
  return (
    <>
      <MainContainer>
        <CreateForm dispatch={dispatch} />
        <div>
          {state.items.map((item) => (
            <div>{item.url}</div>
          ))}
        </div>
      </MainContainer>
    </>
  )
}