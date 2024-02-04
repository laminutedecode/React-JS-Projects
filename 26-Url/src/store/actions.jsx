function getrandomUrl() {
  const randomString =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return randomString;
}


export function add(state,action){
  const url = action.data;
  const shortUrl = getrandomUrl();
  const temp = [...state.items];
  const newItem = {
    url: url.toString(),
    shortUrl: shortUrl,
    view: 0,
  };
  temp.unshift(newItem);
  return {items: [...temp]};

}
export function load(state,action){

}
export function addView(state,action){

}