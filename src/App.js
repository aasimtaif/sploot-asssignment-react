import { Route, Routes, } from 'react-router-dom';
import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { logOut } from './redux/UserLogin';
import './App.css';
import { Login,Blogs } from './Pages';

function App() {
  const {user} = useSelector((state) => state.user)
  console.log(user)
  const dispatch = useDispatch()

  return (
    <div className="App">
<Routes>
  <Route path="/" Component={Login}/>
  <Route path="/blogs/:slug/" Component={Blogs}/>

</Routes>
{user?<button type="button" onClick = {()=>dispatch(logOut())}>LogOut</button>:""}


    </div>
  );
}

export default App;
