import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar';

function App() {
  const [userData, setUserData] = useState([]);
  const [currentOption, setCurrentOption] = useState('All');
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUserData(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    fetchUserData();
  }, []);

  function handleClick(e) {
    const option = e.target.name;
    setCurrentOption(option);

    switch (option) {
      case 'all':
        setUserData([...userData]);
        break;
      case 'name':
        setUserData([...userData.sort((a, b) => a.name.last.localeCompare(b.name.last))]);
        break;
      case 'country':
        setUserData([...userData.sort((a, b) => a.location.country.localeCompare(b.location.country))]);
        break;
      case 'city':
        setUserData([...userData.sort((a, b) => a.location.city.localeCompare(b.location.city))]);
        break;
      default:
        console.log('Aucun membre trouvé');
    }
  }

  function handleCount(){
    setCount(count + 1)
  }

  return (
    <>
    <SearchBar items={userData} />
      <div className="btns">
        <button onClick={handleClick} name="all">All</button>
        <button onClick={handleClick} name="name">Name</button>
        <button onClick={handleClick} name="country">Country</button>
        <button onClick={handleClick} name="city">City</button>
        <button onClick={handleCount}>+1</button>
        {count}
      </div>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>FirstName</th>
            <th>Mail</th>
            <th>Phone</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td><img src={user.picture.thumbnail} width="50px" alt="" /></td>
              <td>{user.name.last}</td>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
