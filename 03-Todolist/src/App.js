import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import Form from './components/form'
function App() {
  return (
    <div className="App">
      <h1 className="title has-text-centered pt-3 is-uppercase has-text-white">React Todo-List</h1>
      <Form />
    </div>
  );
}

export default App;
