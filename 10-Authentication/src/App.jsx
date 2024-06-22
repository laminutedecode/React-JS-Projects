import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRote';
import { auth } from './db/firebase';
import './App.css';

function App() {


  const [user, setUser] = useState(null);
  const [isFetch, setIsFetch] = useState(true);

  
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetch(false);
        return;
      }
      setUser(null);
      setIsFetch(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetch) {
    return <h2>En cours de connexion</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home user={user} />} /> 
        <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} /> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
