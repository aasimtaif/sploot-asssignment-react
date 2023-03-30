import { Route, Routes, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react'

import './App.css';
import { Login,Blogs } from './Pages';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
  navigate("/blogs/weekend-reads")
  
   
  }, []);
  return (
    <div className="App">
<Routes>
  <Route path="/" Component={Login}/>
  <Route path="/blogs/:slug/" Component={Blogs}/>

</Routes>
    </div>
  );
}

export default App;
