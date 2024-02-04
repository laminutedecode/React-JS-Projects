const INITIAL_STATE = {
  articles: []
}


function articleReducer(state = INITIAL_STATE,action){
  switch (action.type) {

    // 12rajouter cette case
    case "ADDARTICLE": {
      // 13) on créer un nouveau tableau avec tout les articles et on rajoute ce nouveau article au debut de ce tableau
      const newArr = [...state.articles];
      newArr.unshift(action.playload);
      // 14)ensuite on retourne ce tableau
      return {
        articles: newArr
      }
    }

    case "LOADARTICLES": {
      return {
        articles: action.payload,
      };
    }
  }
  return state;
}

export default articleReducer;

// appel API

export const getArticles = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADARTICLES",
        payload: data,
      });
    });
};
