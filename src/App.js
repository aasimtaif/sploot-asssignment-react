import { Route, Routes, } from 'react-router-dom';
import React from 'react'
import {useSelector} from 'react-redux';

import './Styles/App.css';
import { Login,Blogs } from './Pages';

function App() {
  const {user} = useSelector((state) => state.user)
  console.log(user)


  return (
    <div className="App">
<Routes>
  <Route path="/" Component={Login}/>
  <Route path="/blogs" Component={Blogs}/>

</Routes>


    </div>
  );
}

export default App;
