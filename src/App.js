import React , { useState} from 'react'
import Dashboard from './components/dashboard'
import './App.css'

function App() {

  const [id, setId] = useState()

  return (
    <div > 
      
    {/* <Login onIdSubmit={setId} /> */}
    <Dashboard/>
    
    </div>

    
  );
}

export default App;
