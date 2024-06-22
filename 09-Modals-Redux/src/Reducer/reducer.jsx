const initialState = {
  ActiveSignIn: false,
  ActiveSignUp: false,
}

export default function modalsReducer(state = initialState, action){
  switch(action.type){
    case "TOGGLEIN":
      if(state.showSignIn){
        return {
          ...state,
        ActiveSignIn: false,
        ActiveSignUp: false,
        }
      }else {
        return {
          ...state,
        ActiveSignIn: true,
        ActiveSignUp: false,
        }
      }
    case "TOGGLEUP":
      if(state.showSignIn){
        return {
          ...state,
        ActiveSignIn: false,
        ActiveSignUp: false,
        }
      }else {
        return {
          ...state,
        ActiveSignIn: false,
        ActiveSignUp: true,
        }
      }
      case "CLOSEMODAL":
        return {
          ...state,
          ActiveSignIn: false,
          ActiveSignUp: false,
        }
        default:
          return state
      

  }
}